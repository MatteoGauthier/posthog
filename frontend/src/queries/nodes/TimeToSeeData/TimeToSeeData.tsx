import MonacoEditor from '@monaco-editor/react'
import { useState } from 'react'
import { AutoSizer } from 'react-virtualized/dist/es/AutoSizer'
import { TimeToSeeDataQuery } from '~/queries/schema'
import { useValues } from 'kea'
import { Spinner } from 'lib/components/Spinner/Spinner'
import { TimeToSeeSessionNode } from './types'
import { dataNodeLogic } from '~/queries/nodes/DataNode/dataNodeLogic'
import { Trace } from 'lib/components/Performance/Traces/Trace'

let uniqueNode = 0

/** Default renderer for data nodes. Display the JSON in a Monaco editor.  */
export function TimeToSeeData(props: { query: TimeToSeeDataQuery }): JSX.Element {
    const [key] = useState(() => `TimeToSeeData.${uniqueNode++}`)
    const logic = dataNodeLogic({ query: props.query, key })
    const { response, responseLoading } = useValues(logic)

    if (responseLoading) {
        return (
            <div className="text-2xl">
                <Spinner />
            </div>
        )
    }

    if (!response) {
        return <div className="text-2xl">No session found.</div>
    }

    return (
        <>
            {props.query.visualization === 'json' ? (
                <AutoSizer disableWidth>
                    {({ height }) => (
                        <MonacoEditor
                            theme="vs-light"
                            className="border"
                            language={'json'}
                            value={JSON.stringify(response, null, 2)}
                            height={Math.max(height, 300)}
                        />
                    )}
                </AutoSizer>
            ) : (
                <Trace timeToSeeSession={response as TimeToSeeSessionNode} />
            )}
        </>
    )
}
