import { FaGitAlt, FaGithub , FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents, SiReactrouter, SiRedux, SiVitest, SiTestinglibrary } from "react-icons/si";
import { BsClipboard2Fill } from "react-icons/bs";
import { BiLogoTypescript } from "react-icons/bi";

export function Skills(){
    return (
        <section className="about" id="about">
            <h2 className="about_title">My Skills</h2>
            <h3>Lista de tecnologias</h3>
            <div className="about_texts">
                <ul className="about_texts_hardSkills">
                    <li className="about_texts_hardSkill"><FaGitAlt /><p>Git</p></li>
                    <li className="about_texts_hardSkill"><FaGithub /><p>GitHub</p></li>
                    <li className="about_texts_hardSkill"><FaHtml5/><p>HTML</p></li>
                    <li className="about_texts_hardSkill"><FaCss3Alt/><p>CSS</p></li>
                    <li className="about_texts_hardSkill"><FaJs/><p>JS</p></li>
                    <li className="about_texts_hardSkill"><FaReact/><p>React</p></li>
                    <li className="about_texts_hardSkill"><SiStyledcomponents/><p>Styled<br/>Components</p></li>
                    <li className="about_texts_hardSkill"><SiReactrouter/><p>Router<br/>Dom</p></li>
                    <li className="about_texts_hardSkill"><BsClipboard2Fill/><p>Hook<br/>Form</p></li>
                    <li className="about_texts_hardSkill"><RiTailwindCssFill/><p>Tailwind</p></li>
                    <li className="about_texts_hardSkill"><SiRedux/><p>Redux</p></li>
                    <li className="about_texts_hardSkill"><BiLogoTypescript/><p>TS</p></li>
                    <li className="about_texts_hardSkill"><FaSass/><p>Sass</p></li>
                    <li className="about_texts_hardSkill"><SiVitest /><p>Vitest</p></li>
                    <li className="about_texts_hardSkill"><SiTestinglibrary  /><p>Testing<br/>Library</p></li>
                </ul>
            </div>
        </section>
    )
}