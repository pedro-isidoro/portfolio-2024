export function Header() {
    return (
        <header className="header">
            <aside className="header_aside">
                <ul className="header_aside_links">
                    <li className="header_aside_link">
                        <a href=".home">Home</a>
                    </li>
                    <li className="header_aside_link">
                        <a href="#about">About</a>
                    </li>
                    <li className="header_aside_link">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="header_aside_link">
                        <a href="#faq">Faq's</a>
                    </li>
                    <li className="header_aside_link">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </aside>
        </header>
    )
}