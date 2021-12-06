import { useState, useEffect } from 'react';
import { wapService } from '../services/wapService.js';
// import { useLocation } from "react-router-dom";

export function WapEdit(props) {

    const [wap, setWap] = useState(null);
    // const wapId = useLocation()

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
    return (
        <section className="wap-edit">
            <h1>edit!</h1>
            {wap &&
                <section>
                    <p>{wap.name}</p>
                </section>
            }
        </section>
    );
}