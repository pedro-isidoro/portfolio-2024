import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents, SiReactrouter, SiRedux } from "react-icons/si";


export function About(){
    return (
        <section className="about">
            <div className="about_image">
                <img src="images/programmer.jpg" alt="Horizontal Image" />
            </div>
            <div className="about_texts">
                <p>Desde muito novo sempre fui curioso sobre muitas coisas, e sempre tive o pensamento de que ao saber pelo menos o mínimo de várias coisas, conseguiria ter uma conversa no mínimo flúida com diferentes tipos de pessoas.<br/>Atualmente tenho me focado nos meus estudos de programação juntamente das matérias da faculdade, além de práticar vocabulário de inglês com aplicativos gratuitos. E como não só de estudos se vive uma pesso também tenho hoobies.</p>
                <ul className="about_texts_hardSkills">
                    <li className="about_texts_hardSkill"><FaHtml5/><p>HTML</p></li>
                    <li className="about_texts_hardSkill"><FaCss3Alt/><p>CSS</p></li>
                    <li className="about_texts_hardSkill"><FaJs/><p>JS</p></li>
                    <li className="about_texts_hardSkill"><FaReact/><p>React</p></li>
                    <li className="about_texts_hardSkill"><SiStyledcomponents/><p>Styled<br/>Components</p></li>
                    <li className="about_texts_hardSkill"><SiReactrouter/><p>Router<br/>Dom</p></li>
                    <li className="about_texts_hardSkill"><RiTailwindCssFill/><p>Tailwind</p></li>
                    <li className="about_texts_hardSkill"><SiRedux/><p>Redux</p></li>
                    <li className="about_texts_hardSkill"><FaSass/><p>Sass</p></li>
                </ul>
            </div>
        </section>
    )
}