import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { GsapFunction } from "@/components/ts/GsapFunction";

interface Props{
    FaqQuestion: string,
    FaqAnswer: string,
    id: string
}

export function Faq(){
    function FaqItem(props: Props) {
        const [active, setActive] = useState(false);
    
        const handleItemClick = () => {
        setActive(!active);
        };
    
        const classeFaq1 = active ? 'faq_item active' : 'faq_item '+"question-"+props.id;
        const testId = "menu-icon-"+props.id
        const testIdClose = "close-icon-"+props.id

        return (
        <li className={classeFaq1} onClick={handleItemClick}>
            {active ? (
                <h3 className="question">{props.FaqQuestion}<IoMdArrowDropup className="question_icon" data-testid={testIdClose}/></h3>
            ) : (
                <h3 className={"question question-"+props.id}>{props.FaqQuestion}<IoMdArrowDropdown className="question_icon" data-testid={testId}/></h3>
            )}
                <p className="answer" dangerouslySetInnerHTML={{ __html: props.FaqAnswer }}></p>
        </li>
        );
    }
    for(let i=1; i<=5; i++){
        let triggerValue = ".question-"+i
        GsapFunction({triggerFather: ".faq_items", trigger: triggerValue, markers: false, start: "top 750px", end: "bottom 670px"});
    }
    return(
        <section className="faq" id="faq">
            <h2>FAQ</h2>
            <ul className="faq_items">
                <FaqItem FaqQuestion="Quem eu sou?" FaqAnswer="Eu me chamo Pedro Luis de Souza Isidoro, tenho 21 anos e atualmente estudante do 7° semestre de Ciência da Computação." id='1' />
                <FaqItem FaqQuestion="Se eu Trabalho?" FaqAnswer="Atuo como Desenvolvedor Front-end, contribuindo na construção de um site de vendas e em um sistema interno (intranet) voltado para o controle de ordens de serviço. Minha stack atual inclui JavaScript, TypeScript, React e Chakra UI, tecnologias com as quais venho entregando soluções funcionais, responsivas e com foco em usabilidade. <br/> Atualmente, venho aprofundando meus conhecimentos em C# com foco na integração e manutenção de APIs, buscando expandir minha atuação também para o back-end. <br/> Com uma mentalidade voltada para a melhoria contínua, alio meus estudos à prática no dia a dia da empresa, sempre com foco em entregar valor real para os projetos. A comunicação clara, o trabalho em equipe e o compromisso com a evolução constante são pilares que me guiam como desenvolvedor." id='2' />
                <FaqItem FaqQuestion="Onde Estudo?" FaqAnswer="Realizo minha faculdade na UAM - Anhembi Morumbi, e como acréscimo desde 2023 venho estudando desenvolvimento web front end, com mentoria e suporte, do curso Dev Quest - Dev em dobro, o qual encerrei em Dezembro de 2024. E atualmente venho estudando a linguagem back-end C#." id='3' />
                <FaqItem FaqQuestion="Quais minhas Habilidades?" FaqAnswer="Sou um jovem curioso, esforçado, dedicado e organizado. Além de sempre buscar realizar o meu melhor, muitas vezes sou colocado na linha de frente para liderança, e mesmo com receio de falhar eu aceito. Com as diferentes experiências que vivênciei, e ainda experimento, aprendi a sempre dar o meu melhor e sempre trabalhar em equipe quando necessário." id='4' />
                <FaqItem FaqQuestion="Se tenho hobbies?" FaqAnswer="Com toda a certeza, como não só de estudos e trabalho se vive uma pessoa, lhe apresento meus hobbies neste site que desenvolvi: https://my-hobbies.vercel.app" id='5' />
            </ul>
        </section>
    )
}