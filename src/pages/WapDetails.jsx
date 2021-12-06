import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
import { DynamicEditor } from '../cmps/edits/DynamicEditor';
import { WapEditor } from '../cmps/edits/WapEditor';

import { wapService } from '../services/wapService.js';
import { CmpList } from '../cmps/wap/CmpList';


export function WapDetails(props) {

    const [wap, setWap] = useState(null);
    const [editor, setEditor] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const wapId = props.match.params.wapId
                const currWap = await wapService.getById(wapId)
                setWap(currWap)
            } catch (err) {
                console.log(err);
            }
        })()
    }, [props.match.params.wapId])

    const toggleEditor = (type, cmpStyle, showEdit) => {
        if (!type) setEditor(null)
        setEditor({
            type,
            cmpStyle,
            showEdit
        })
    }

    const addCmp = async (cmp) => {
        try {
            const newWap = await wapService.addCmp(wap._id, cmp)
            setWap(newWap)
        } catch (err) {
            console.log(err);
        }
    }

    const deleteCmp = async (cmpId) => {
        try {
            const newWap = await wapService.deleteCmp(wap._id, cmpId)
            setWap(newWap)
        } catch (err) {
            console.log(err);
        }
    }
    const moveCmp = async (cmpId, diff) => {
        try {
            const newWap = await wapService.moveCmp(wap._id, cmpId, diff)
            if (newWap) setWap(newWap)
        } catch (err) {
            console.log(err);
        }
    }

    const saveWap = async (ev) => {
        ev?.preventDefault()
        try {
            await wapService.saveWap(wap)
            if (ev) toggleEditor()
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <section className="wap-details full">
            <div className="flex">
                <WapEditor addCmp={addCmp} />
                {wap && <section className="wap-board">
                    {editor && <section>
                        <DynamicEditor
                            type={editor.type}
                            cmpStyle={editor.cmpStyle}
                            showEdit={editor.showEdit}
                            saveWap={saveWap}
                            toggleEditor={toggleEditor} />

                    </section>}
                    {/* <Link to={`/wap/create/${wap._id}`}>edit</Link> */}
                    <CmpList
                        cmps={wap.cmps}
                        deleteCmp={deleteCmp}
                        moveCmp={moveCmp}
                        saveWap={saveWap}
                        toggleEditor={toggleEditor} />
                </section>
                }
            </div>
        </section>
    );
}

