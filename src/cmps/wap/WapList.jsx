import { WapPreview } from "./WapPreview";

export function WapList({ wapsForDisplay, removeWap }) {


    return (
        <ul className="wap-list">
            {wapsForDisplay.map(wap =>
                <WapPreview wap={wap} key={wap._id} removeWap={removeWap} />
            )}

        </ul>
    );
}