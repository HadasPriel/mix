export function EditorCmpPreview({ cmp, addCmp }) {

    const add = () => {
        addCmp(cmp)
    }

    return (
        <li className="wap-editor-preview">
            {cmp.type}
            <button onClick={add}>add</button>
        </li>
    )

}