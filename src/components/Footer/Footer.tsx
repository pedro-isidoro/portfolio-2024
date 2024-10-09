import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";


export function Footer(){
    return(
        <footer className="footer">
            <ul className="footer_nets_list">
                <li className="footer_nets_item"><FaInstagram /></li>
                <li className="footer_nets_item"><FaLinkedin /></li>
                <li className="footer_nets_item"><FaGithub /></li>
            </ul>
            <a onClick={() => scrollTo({ top: 0, behavior: 'smooth'})} className="arrow"><BsArrowUp /></a>
        </footer>
    )
}