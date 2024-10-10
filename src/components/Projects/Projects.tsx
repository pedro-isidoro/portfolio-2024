import { useEffect, useState } from "react"
import ProjectsData from '@/components/json/Projects.json'
import { ProjectDetails } from "./ProjectDetails";

interface Project {
    id: number; 
    title: string;
    src: string; 
    stack: string;
    paragraph: string;
    vercelLink: string;
}
export function Projects(){
    const [projects, setProjectsData] = useState<Project[]>([])
    useEffect(() => {
        setProjectsData(ProjectsData)
    }, [])
    return (
        <section className="projects" id="projects">
            <h2 className="projects_title">My Best Projects</h2>
            <ul className="projects_content_list">
                {projects.length > 0 ?(
                    projects.map((project: Project, id: number) => (
                        <li key={id} id="projects_content_list_item">
                            <ProjectDetails details={project}/>
                        </li>
                    ))
                ) : (<></>)}
            </ul>
        </section>
    )
}