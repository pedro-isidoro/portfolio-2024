import { useEffect, useState } from "react"
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import ProjectsData from '@/components/json/Projects.json'
import { ProjectDetails } from "./ProjectDetails";

export function Projects(){
    interface Project {
        id: number; 
        title: string;
        src: string; 
        stack: string;
        paragraph: string;
        vercelLink: string;
    }
    const [projects, setProjectsData] = useState<Project[]>([])
    useEffect(() => {
        setProjectsData(ProjectsData)
    }, [])
    return (
        <section className="projects">
            <h2 className="projects_title">My Best Projects</h2>
            <Swiper spaceBetween={30} pagination={{clickable: true,}} modules={[Pagination]} className="projects_content_list">
                {projects.length > 0 ?(
                    projects.map((project: Project, id: number) => (
                        <SwiperSlide key={id}>
                            <ProjectDetails details={project}/>
                        </SwiperSlide>
                    ))
                ) : (<></>)}
            </Swiper>
        </section>
    )
}