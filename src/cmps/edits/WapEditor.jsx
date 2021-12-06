import { useState, useEffect } from 'react';

import { cmpService } from '../../services/cmpService.js';
import { EditorCmpList } from './EditorCmpList.jsx';

export function WapEditor({ addCmp }) {

    const [bankCmps, setBankCmps] = useState(null)
    const [currEditor, setCurrEditor] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const cmps = await cmpService.query()
                setBankCmps(cmps)
            } catch (err) {
                console.log(err);
            }
        })()
    }, [])

    const toggleCurrEditor = (editor) => {
        if (currEditor) setCurrEditor(null)
        else setCurrEditor(editor)
    }

    return (
        <section className="wap-editor">
            <nav>
                <div className="btn-container">
                    <button className="editor-btn" onClick={() => toggleCurrEditor('editorCmpList')}></button>
                    <span className="btn-label">add </span>
                </div>
            </nav>
            {currEditor && <div className="editor-content">
                <header className="header-set">
                    {(currEditor === 'editorCmpList') && <h3>Add to site</h3>}
                    <nav>
                        <span>Search</span>
                        <span>?</span>
                        <span>x</span>
                    </nav>
                </header>
                <main>
                    {(currEditor === 'editorCmpList') && <EditorCmpList bankCmps={bankCmps} addCmp={addCmp} />}
                </main>
            </div>}
        </section>
    )
}