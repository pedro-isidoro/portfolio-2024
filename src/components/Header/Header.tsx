import { FaArrowRight } from "react-icons/fa6";

export function Header() {
    return (
        <header className="header">
            <h3 className="header_section_title">Pedro Isidoro</h3>
            <aside className="header_aside">
                <ul className="header_aside_links">
                    <li className="header_aside_link">Home</li>
                    <li className="header_aside_link">About</li>
                    <li className="header_aside_link">Projects</li>
                    <li className="header_aside_link">Faq's</li>
                    <li className="header_aside_link">Contact</li>
                </ul>
            </aside>
            <a onClick={() => scrollTo({ top: 3010, behavior: 'smooth'})} className="header_anchor">Contate-me <FaArrowRight className="header_anchor_icon"/></a>
        </header>
    )
}