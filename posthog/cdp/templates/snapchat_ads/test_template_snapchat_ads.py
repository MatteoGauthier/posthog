from inline_snapshot import snapshot
from posthog.cdp.templates.helpers import BaseHogFunctionTemplateTest
from posthog.cdp.templates.snapchat_ads.template_snapchat_ads import (
    template as template_snapchat_ads,
)


class TestTemplateSnapchatAds(BaseHogFunctionTemplateTest):
    template = template_snapchat_ads

    def _inputs(self, **kwargs):
        inputs = {
            "accessToken": "accessToken12345",
            "pixelId": "pixel12345",
            "eventName": "purchase",
            "eventTime": "1728812163",
            "actionSource": "WEB",
            "userData": {
                "em": "3edfaed7454eedb3c72bad566901af8bfbed1181816dde6db91dfff0f0cffa98",
                "ph": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            },
            "customData": {
                "currency": "USD",
                "price": "1500",
                "event_id": "49ff3d7c-359d-4f45-960e-6cda29f1beea",
            },
        }
        inputs.update(kwargs)
        return inputs

    def test_function_works(self):
        self.run_function(
            self._inputs(),
            globals={
                "event": {
                    "uuid": "49ff3d7c-359d-4f45-960e-6cda29f1beea",
                    "properties": {
                        "$current_url": "https://posthog.com/cdp",
                    },
                },
            },
        )
        assert self.get_mock_fetch_calls()[0] == snapshot(
            (
                "https://tr.snapchat.com/v3/pixel12345/events?access_token=accessToken12345",
                {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json",
                    },
                    "body": {
                        "data": [
                            {
                                "event_name": "purchase",
                                "action_source": "WEB",
                                "event_time": "1728812163",
                                "user_data": {"em": "3edfaed7454eedb3c72bad566901af8bfbed1181816dde6db91dfff0f0cffa98"},
                                "custom_data": {
                                    "currency": "USD",
                                    "price": "1500",
                                    "event_id": "49ff3d7c-359d-4f45-960e-6cda29f1beea",
                                },
                                "event_source_url": "https://posthog.com/cdp",
                            }
                        ]
                    },
                },
            )
        )
