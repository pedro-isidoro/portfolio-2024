import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface Props{
    FaqQuestion: string,
    FaqAnswer: string
}

export function Faq(){
    function FaqItem(props: Props) {
        const [active, setActive] = useState(false);
    
        const handleItemClick = () => {
        setActive(!active);
        };
    
        const classeFaq1 = active ? 'faq-item active' : 'faq-item';
    
        return (
        <li className={classeFaq1} onClick={handleItemClick}>
            {active ? (
                <h3 className="question">{props.FaqQuestion}<IoMdArrowDropup className="question_icon"/></h3>
            ) : (
                <h3 className="question">{props.FaqQuestion}<IoMdArrowDropdown className="question_icon"/></h3>
            )}
            <p className="answer">{props.FaqAnswer}</p>
        </li>
        );
    }
    return(
        <section className="faq" id="faq">
            <h2>FAQ</h2>
            <ul className="faq-items">
                <FaqItem FaqQuestion="Quem eu sou?" FaqAnswer="Eu me chamo Pedro Luis de Souza Isidoro, tenho 21 anos e atualmente estudante do 6° semestre de Ciência da Computação."/>
                <FaqItem FaqQuestion="Se eu Trabalho?" FaqAnswer="Infelizmente não, atualmente estou em busca da minha 1° oportunidade de emprego, onde possa colocar em prática tudo que estudo e continuo aprendendo." />
                <FaqItem FaqQuestion="Onde Estudo?" FaqAnswer="Realizo minha faculdade na UAM - Anhembi Morumbi, e como acréscimo desde 2023 venho estudando desenvolvimento web front end, com mentoria e suporte, do curso Dev Quest - Dev em dobro." />
                <FaqItem FaqQuestion="Quais minhas Habilidades?" FaqAnswer="Sou um jovem curioso, esforçado, dedicado e organizado. Além de sempre buscar realizar o meu melhor, muitas vezes sou colocado na linha de frente para liderança, e mesmo com receio de falhar, aceito e dou o meu melhor" />
                <FaqItem FaqQuestion="Se tenho hobbies?" FaqAnswer="Com toda a certeza, como não só de estudo e trabalho se vive uma pessoa, lhe apresento meus hobbies neste site que desenvolvi: https://my-hobbies.vercel.app" />
            </ul>
        </section>
    )
}