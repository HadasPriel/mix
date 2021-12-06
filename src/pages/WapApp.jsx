import { WapList } from "../cmps/wap/WapList";
import { wapService } from "../services/wapService.js";
import { useState, useEffect } from 'react';

export function WapApp(props) {

    const [wapsForDisplay, setWaps] = useState(null);
    const [newWapName, setNewWapName] = useState('');

    useEffect(() => {
        (async () => {
            try {
                loadWaps()
            } catch (err) {
                console.log(err);
            }
        })()
    }, [])

    const loadWaps = async () => {
        try {
            const userWaps = await wapService.query()
            setWaps(userWaps)
        } catch (err) {
            console.log(err);
        }
    }

    const addWap = async (event) => {
        event.preventDefault()
        try {
            const newWap = await wapService.add(newWapName)
            setNewWapName('')
            props.history.push(`wap/create/${newWap._id}`)
        } catch (err) {
            console.log(err);
        }
    }

    const removeWap = async (wapId) => {
        try {
            await wapService.remove(wapId)
            loadWaps()

        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (ev) => {
        setNewWapName(ev.target.value)
    }

    return (
        <section className="wap-app">
            <h1>WapApp</h1>
            {wapsForDisplay && <WapList wapsForDisplay={wapsForDisplay} removeWap={removeWap} />}

            <form onSubmit={addWap}>
                <label> wap name:
                    <input type="text" value={newWapName} onChange={handleChange} />
                </label>
                <button >Add Wap!</button>
            </form>
        </section>
    );
}