import { EditorCmpPreview } from "./EditorCmpPreview"

export function EditorCmpList({ bankCmps, addCmp }) {

    return (
        <ul>
            {bankCmps?.map(cmp => {
                return <EditorCmpPreview key={cmp._id} cmp={cmp} addCmp={addCmp} />
            })}
        </ul>
    )

}