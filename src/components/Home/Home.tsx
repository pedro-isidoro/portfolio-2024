import { FaArrowRight } from "react-icons/fa6";

export function Home() {
    return (
        <section className="home" id="home">
            <a onClick={() => scrollTo({ top: 3010, behavior: 'smooth'})} className="home_anchor">Contate-me <FaArrowRight className="home_anchor_icon"/></a>
            <div className="home_introducing">
                <h1>👋🏼 Olá Pessoal,<br/> Pedro Isidoro Aqui</h1>
                <p>Um estudante de TI, estudando para se tornar um dos melhores  Desenvolvedores Web Front end</p>
            </div>
            <div className="home_image">
                <img src="images/me-in-the-sun.jpg" alt="Profile image mine" />
            </div>
        </section>
    )
}