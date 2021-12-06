import { Link } from 'react-router-dom'

export function WapPreview({ wap, removeWap }) {


    return (
        <li className="wap-preview">
            <Link to={`wap/${wap._id}`}>
                <p>{wap.name}</p>
            </Link>
            <button onClick={() => { removeWap(wap._id) }}>X</button>
        </li>
    );
}