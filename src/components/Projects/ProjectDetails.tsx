interface Project {
    id: number; 
    title: string;
    src: string; 
    stack: string;
    paragraph: string;
    vercelLink: string;
}

interface ProjectDetailsProps {
  details: Project;
}
export function ProjectDetails({details}: ProjectDetailsProps){
    return(
        <section className="ProjectDetails_card" key={details.id}>
            <div className="ProjectDetails_card_infos">
                <img src={details.src} alt={details.title} />
                <div className="ProjectDetails_card_info">
                    <p className="ProjectDetails_card_info_p">{details.paragraph}</p>
                    <p className="ProjectDetails_card_info_stack">Stack: <span>{details.stack}</span></p>
                </div>
            </div>
        </section>
    )
}