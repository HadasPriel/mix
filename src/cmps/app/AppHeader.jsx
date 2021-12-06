import { Link } from 'react-router-dom'

export function AppHeader() {
    return (
        <header className="app-header full main-container">
            <div className="header-container header-set">
                <p>MIX</p>
                <nav>
                    <Link to="/">Home</Link> |
                    <Link to="/wap">Wap</Link>
                </nav>
            </div>
        </header>
    );
}