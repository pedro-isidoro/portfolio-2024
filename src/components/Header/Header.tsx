export function Header() {
    return (
        <header className="header">
            <aside className="header_aside">
                <ul className="header_aside_links">
                    <li className="header_aside_link">
                        <a href="#home" aria-label="Link to Home">Home</a>
                    </li>
                    <li className="header_aside_link">
                        <a href="#skills" aria-label="Link to Skills Section">Skills</a>
                    </li>
                    <li className="header_aside_link">
                        <a href="#projects" aria-label="Link to Projects Section">Projects</a>
                    </li>
                    <li className="header_aside_link">
                        <a href="#faq" aria-label="Link to Faq's Section">Faq's</a>
                    </li>
                    <li className="header_aside_link">
                        <a href="#contact" aria-label="Link to Contact Section">Contact</a>
                    </li>
                </ul>
            </aside>
        </header>
    )
}