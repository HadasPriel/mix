export function WapGallery({ cmp }) {
    return (
        <section className={`wap-gallery ${cmp.theme}`} >
            {cmp.info.imgs.map(img => {
                return (
                    <div className={`${img.ratio}`} style={{ backgroundImage: `url(${img.url})` }} key={img.id}></div>
                )
            })}
        </section>
    );
}