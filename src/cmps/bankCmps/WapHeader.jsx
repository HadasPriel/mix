export function WapHeader({ cmp }) {

    return (
        <header className={`wap-header ${cmp.theme} full main-container`} >
            <div className="header-container header-set">
                <h1>{cmp.info.logo}</h1>
                <nav>
                    {cmp.info.navItems.map(item => {
                        return (
                            <a href={item.url} key={item.id}>{item.txt}</a>
                        )
                    })}
                </nav>
            </div>
        </header>
    );
}