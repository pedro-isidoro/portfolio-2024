import gsap from "gsap";
import { useLayoutEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";

export function Home() {
    useLayoutEffect(()=>{
        gsap.fromTo(".home_introducing", {
            opacity: 0,
            y: -340,
        },{
            opacity:1,
            y: 0,
        })
        .duration(1.5)
        gsap.fromTo(".home_anchor", {
            opacity: 0,
            y: -400,
        },{
            opacity:1,
            y: 0,
        })
        .duration(1.6)

        return ()=>{
            gsap.killTweensOf(".home_introducing")
            gsap.killTweensOf(".home_anchor")
        }
    }, [])
    return (
        <section className="home" id="home" >
            <a onClick={() => scrollTo({ top: 3010, behavior: 'smooth'})} className="home_anchor">Contate-me <FaArrowRight className="home_anchor_icon"/></a>
            <div className="home_introducing">
                <h1>👋🏼 Olá Pessoal,<br/> Pedro Isidoro Aqui</h1>
                <p>Um estudante de TI, estudando para se tornar um dos melhores  Desenvolvedores Web Front end</p>
            </div>
            <div className="home_image">
                <img src="images/Foto-minha.jpg" alt="Profile image mine" />
            </div>
        </section>
    )
}