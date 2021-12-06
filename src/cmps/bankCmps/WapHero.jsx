import { useState, useEffect } from 'react';

export function WapHero({ cmp, toggleEditor, saveWap }) {

    const [hero, setHero] = useState(cmp);
    const [cmpStyle, setCmpStyle] = useState({
        color: hero.style.color,
        backgroundImage: `url(${hero.info.imgUrl})`,
        fontSize: `${hero.style.fontSize}px`,
        fontFamily: hero.style.fontFamily
    });

    useEffect(() => {
        setCmpStyle(() => {
            return ({
                color: hero.style.color,
                backgroundImage: `url(${hero.info.imgUrl})`,
                fontSize: `${hero.style.fontSize}px`,
                fontFamily: hero.style.fontFamily
            })
        })
        saveWap()
    }, [hero])


    const showEdit = (colorStyle, fontSizeStyle, fontFamilyStyle) => {
        setHero(prevHero => {
            const newHero = { ...prevHero }
            newHero.style.color = colorStyle
            newHero.style.fontSize = fontSizeStyle
            newHero.style.fontFamily = fontFamilyStyle
            // newHero.info.title = fontFamilyStyle
            return newHero
        })
    }

    const showTxtEdit = (ev) => {
        setHero(prevHero => {
            const newHero = { ...prevHero }
            newHero.info.title = ev.target.innerText
            return newHero
        })
        saveWap()
        if (!ev.relatedTarget) toggleEditor()
    }

    return (
        <section className={`wap-hero full main-container ${cmp.theme}`} style={cmpStyle} >
            {/* <TxtEdit cmpStyle={hero.style} showEdit={showEdit} /> */}
            <h1
                className="title"
                onClick={() => { toggleEditor('txt', cmp.style, showEdit) }}
                onBlur={showTxtEdit}
                contentEditable
                suppressContentEditableWarning={true}
            >{hero.info.title}</h1>
        </section>
    );
}