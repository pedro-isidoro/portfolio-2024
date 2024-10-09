import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
export function Home() {
    return (
        <section className="home">
            <div className="home_introducing">
                <ul className="home_introducing_nets">
                    <li className="home_introducing_net"><FaInstagram /></li>
                    <li className="home_introducing_net"><FaLinkedin /></li>
                    <li className="home_introducing_net"><FaGithub /></li>
                </ul>
                <h1>👋🏼 Olá Pessoal,<br/> Pedro Isidoro Aqui</h1>
                <p>Um estudante de TI, estudando para se tornar um dos melhores  Desenvolvedores Web Front end</p>
            </div>
            <div className="home_image">
                <img src="images/me-in-the-sun.jpg" alt="Profile image mine" />
            </div>
        </section>
    )
}