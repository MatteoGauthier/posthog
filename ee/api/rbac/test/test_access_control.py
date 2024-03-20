from rest_framework import status

from ee.api.test.base import APILicensedTest
from posthog.constants import AvailableFeature
from posthog.models.notebook.notebook import Notebook
from posthog.models.organization import OrganizationMembership


class BaseAccessControlTest(APILicensedTest):
    def setUp(self):
        super().setUp()
        self.organization.available_features = [
            AvailableFeature.PROJECT_BASED_PERMISSIONING,
            AvailableFeature.ROLE_BASED_ACCESS,
        ]
        self.organization.save()

        self.default_resource_id = self.team.id

    def _put_access_control(self, data={}):
        payload = {"access_level": "admin"}

        payload.update(data)
        return self.client.put(
            "/api/projects/@current/access_controls",
            payload,
        )

    def _org_membership(self, level: OrganizationMembership.Level = OrganizationMembership.Level.ADMIN):
        self.organization_membership.level = level
        self.organization_membership.save()


class TestAccessControlProjectLevelAPI(BaseAccessControlTest):
    def test_project_change_rejected_if_not_org_admin(self):
        self._org_membership(OrganizationMembership.Level.MEMBER)
        res = self._put_access_control()
        assert res.status_code == status.HTTP_403_FORBIDDEN, res.json()

    def test_project_change_accepted_if_org_admin(self):
        self._org_membership(OrganizationMembership.Level.ADMIN)
        res = self._put_access_control()
        assert res.status_code == status.HTTP_200_OK, res.json()

    def test_project_change_accepted_if_org_owner(self):
        self._org_membership(OrganizationMembership.Level.OWNER)
        res = self._put_access_control()
        assert res.status_code == status.HTTP_200_OK, res.json()

    def test_project_removed_with_null(self):
        self._org_membership(OrganizationMembership.Level.OWNER)
        res = self._put_access_control()
        res = self._put_access_control({"access_level": None})
        assert res.status_code == status.HTTP_204_NO_CONTENT

    def test_project_change_if_in_access_control(self):
        self._org_membership(OrganizationMembership.Level.ADMIN)
        # Add ourselves to access
        res = self._put_access_control(
            {"organization_member": str(self.organization_membership.id), "access_level": "admin"}
        )
        assert res.status_code == status.HTTP_200_OK, res.json()

        self._org_membership(OrganizationMembership.Level.MEMBER)

        # Now change ourselves to a member
        res = self._put_access_control(
            {"organization_member": str(self.organization_membership.id), "access_level": "member"}
        )
        assert res.status_code == status.HTTP_200_OK, res.json()
        assert res.json()["access_level"] == "member"

        # Now try and change our own membership and fail!
        res = self._put_access_control(
            {"organization_member": str(self.organization_membership.id), "access_level": "admin"}
        )
        assert res.status_code == status.HTTP_403_FORBIDDEN
        assert res.json()["detail"] == "Must be admin to modify project permissions."

    def test_project_change_rejected_if_not_in_organization(self):
        self.organization_membership.delete()
        res = self._put_access_control(
            {"organization_member": str(self.organization_membership.id), "access_level": "admin"}
        )
        assert res.status_code == status.HTTP_404_NOT_FOUND, res.json()

    def test_project_change_rejected_if_bad_access_level(self):
        res = self._put_access_control({"access_level": "bad"})
        assert res.status_code == status.HTTP_400_BAD_REQUEST, res.json()
        assert res.json()["detail"] == "Invalid access level. Must be one of: none, member, admin", res.json()


class TestAccessControlResourceLevelAPI(BaseAccessControlTest):
    default_resource = "notebook"
    default_resource_id = 1
    default_access_level = "editor"

    def setUp(self):
        super().setUp()

        self.notebook = Notebook.objects.create(
            team=self.team, created_by=self.user, short_id="0", title="first notebook"
        )

        self.other_user = self._create_user("other_user")
        self.other_user_notebook = Notebook.objects.create(
            team=self.team, created_by=self.other_user, short_id="1", title="first notebook"
        )

    def _get_access_controls(self, data={}):
        return self.client.get(f"/api/projects/@current/notebooks/{self.notebook.short_id}/access_controls")

    def _put_access_control(self, data={}, notebook_id=None):
        payload = {
            "access_level": self.default_access_level,
        }

        payload.update(data)
        return self.client.put(
            f"/api/projects/@current/notebooks/{notebook_id or self.notebook.short_id}/access_controls",
            payload,
        )

    def test_get_access_controls(self):
        self._org_membership(OrganizationMembership.Level.MEMBER)
        res = self._get_access_controls()
        assert res.status_code == status.HTTP_200_OK, res.json()
        assert res.json() == {"access_controls": [], "available_access_levels": ["viewer", "editor"]}

    def test_change_rejected_if_not_org_admin(self):
        self._org_membership(OrganizationMembership.Level.MEMBER)
        res = self._put_access_control(notebook_id=self.other_user_notebook.short_id)
        assert res.status_code == status.HTTP_403_FORBIDDEN, res.json()

    # def test_change_permitted_if_creator_of_the_resource(self):
    #     # TODO: Implement this test
    #     assert False
    #     # self._org_membership(OrganizationMembership.Level.MEMBER)
    #     # res = self._put_access_control()
    #     # assert res.status_code == status.HTTP_403_FORBIDDEN, res.json()
