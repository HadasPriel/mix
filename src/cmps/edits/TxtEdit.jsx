import { useState, useEffect } from 'react';

export function TxtEdit({ cmpStyle: { color, fontSize, fontFamily }, showEdit, saveWap, toggleEditor }) {


    const [colorStyle, setColor] = useState(color);
    const [fontSizeStyle, setFontSize] = useState(fontSize);
    const [fontFamilyStyle, setFontFamily] = useState(fontFamily);

    useEffect(() => {
        showEdit(colorStyle, fontSizeStyle, fontFamilyStyle)

    }, [colorStyle, fontSizeStyle, fontFamilyStyle])

    const handleChange = (ev) => {
        if (ev.target.name === "fontFamily") {
            setFontFamily(ev.target.value)
        } else if (ev.target.name === "fontSize") {
            setFontSize(+ev.target.value)
        } else if (ev.target.name === "color") {
            setColor(ev.target.value)
        }
    }


    return (
        <form onSubmit={saveWap} className="txt-edit" tabIndex="0" >
            <button className="btn" type="button" onClick={toggleEditor}>X</button>
            <select className="btn" name="fontFamily" value={fontFamilyStyle} onChange={handleChange}>
                <option value="lobster">Lobster</option>
                <option value="helvetica">Helvetica</option>
                <option value="tech">Tech</option>
            </select>

            <input className="btn" name="fontSize" type="number" value={fontSizeStyle} onChange={handleChange} />

            <input className="np" name="color" type="color" value={colorStyle} onChange={handleChange} />

            <button>save</button>
        </form>
    );
}