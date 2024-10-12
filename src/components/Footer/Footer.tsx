import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";


export function Footer(){
    return(
        <footer className="footer">
            <ul className="footer_nets_list">
                <li className="footer_nets_item">
                   <a href="https://www.instagram.com/pedrol.isidoro/" target="_blank" data-testid='instagram'><FaInstagram /></a>
                </li>
                <li className="footer_nets_item">
                    <a href="https://www.linkedin.com/in/pedro-isidoro" target="_blank" data-testid='linkedin'><FaLinkedin /></a>
                </li>
                <li className="footer_nets_item">
                    <a href="https://github.com/pedro-isidoro" target="_blank" data-testid='github'><FaGithub /></a>
                </li>
            </ul>
            <a onClick={() => scrollTo({ top: 0, behavior: 'smooth'})} data-testid='arrowUp' className="arrow"><BsArrowUp /></a>
        </footer>
    )
}