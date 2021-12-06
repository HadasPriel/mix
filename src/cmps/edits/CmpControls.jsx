export function CmpControls({ cmpId, deleteCmp, moveCmp }) {

    const onDeleteCmp = () => {
        deleteCmp(cmpId)
    }

    const onMoveCmpUp = () => {
        moveCmp(cmpId, -1)
    }

    const onMoveCmpDown = () => {
        moveCmp(cmpId, 1)
    }



    return (
        <nav>
            <button onClick={onDeleteCmp}>X</button>
            {/* <button onClick={ }>change bg color</button> */}
            <button onClick={onMoveCmpUp}>up</button>
            <button onClick={onMoveCmpDown}>down</button>
        </nav>
    );
}