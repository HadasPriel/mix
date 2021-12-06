import { CmpControls } from "../edits/CmpControls"
import { DynamicCmp } from "./DynamicCmp"

export function CmpList({ cmps, deleteCmp, moveCmp, toggleEditor, saveWap }) {

    return (
        <ul>
            {cmps.map(cmp => {
                return (
                    <li key={cmp.id}>
                        <CmpControls
                            cmpId={cmp.id}
                            deleteCmp={deleteCmp}
                            moveCmp={moveCmp} />
                        <DynamicCmp cmp={cmp} toggleEditor={toggleEditor} saveWap={saveWap} />
                    </li>
                )
            })}
        </ul>
    )
}