'use client';

import { useState } from "react";
import { htmlCss, javascript, mongodb, nextJS, Project, react, sql, Tech, typescript } from "../models/project";
import ProjectItem from "./project/project";
import Image from 'next/image';

import "./projects.css";

export default function ProjectPage () {
    const projects: Project[] = [
        {
            name: 'Life Dashboard',
            description: "Une application web bâtie avec NextJS qui me sert de page d'accueil de navigateur. Elle comporte plusieurs widgets comme mon calendrier, la météo et un chatbot connecté à l'API d'OpenAI",
            repoLink: "https://github.com/SimardCodeTard/life-dashboard",
            imagePath: "/shrek.png",
            techStack: [
                nextJS,
                react,
                typescript,
                htmlCss,
                mongodb
            ]
        },{
            name: 'Life Dashboard',
            description: "Une application web bâtie avec NextJS qui me sert de page d'accueil de navigateur. Elle comporte plusieurs widgets comme mon calendrier, la météo et un chatbot connecté à l'API d'OpenAI",
            repoLink: "https://github.com/SimardCodeTard/life-dashboard",
            imagePath: "/shrek.png",
            techStack: [
                nextJS,
                react,
                typescript,
                htmlCss,
                mongodb
            ]
        },{
            name: 'Life Dashboard',
            description: "Une application web bâtie avec NextJS qui me sert de page d'accueil de navigateur. Elle comporte plusieurs widgets comme mon calendrier, la météo et un chatbot connecté à l'API d'OpenAI",
            repoLink: "https://github.com/SimardCodeTard/life-dashboard",
            imagePath: "/shrek.png",
            techStack: [
                nextJS,
                react,
                typescript,
                htmlCss,
                mongodb
            ]
        },{
            name: 'Life Dashboard',
            description: "Une application web bâtie avec NextJS qui me sert de page d'accueil de navigateur. Elle comporte plusieurs widgets comme mon calendrier, la météo et un chatbot connecté à l'API d'OpenAI",
            repoLink: "https://github.com/SimardCodeTard/life-dashboard",
            imagePath: "/shrek.png",
            techStack: [
                nextJS,
                react,
                typescript,
                htmlCss,
                mongodb
            ]
        },{
            name: 'Life Dashboard',
            description: "Une application web bâtie avec NextJS qui me sert de page d'accueil de navigateur. Elle comporte plusieurs widgets comme mon calendrier, la météo et un chatbot connecté à l'API d'OpenAI",
            repoLink: "https://github.com/SimardCodeTard/life-dashboard",
            imagePath: "/shrek.png",
            techStack: [
                nextJS,
                react,
                typescript,
                htmlCss,
                mongodb
            ]
        },
    ];

    const [selectedFilters, setSelectedFilters] = useState(new Set<Tech>());
    
    const [displayProjects, setDisplayProjects] = useState<Project[]>(projects);

    const filterProjectsByTechs = (techs: Set<Tech>) => {
        console.log('in filterProjectsByTechs');
        console.log('techs', techs);
        if(techs.size === 0) {
            resetFilter();
            return;
        }
        setDisplayProjects(projects.filter(project => {
            return project.techStack.some(tech => techs.has(tech));
        }));        
        console.log('displayProjects', displayProjects);
    }

    const selectTechFilter = (tech: Tech) => {
        console.log('in selectTechFilter');
        console.log(tech);
        selectedFilters.add(tech);
        setSelectedFilters(new Set(selectedFilters));
        filterProjectsByTechs(selectedFilters);
    }

    const onTechFilterClick = (tech: Tech) => {
        console.log('in onTechFilterClick');
        console.log(tech);
        if(!selectedFilters.has(tech)) {
            selectTechFilter(tech);
        } else {
            selectedFilters.delete(tech);
            filterProjectsByTechs(selectedFilters);
        }
    }

    const resetFilter = () => {
        setSelectedFilters(new Set<Tech>());
        setDisplayProjects(projects);
    }

    const techsInProjects = projects.flatMap(project => project.techStack.map(ts => ts)).concat(sql).map(tech => tech).filter((tech, index, self) => self.indexOf(tech) === index);

    return <div className="projects-page">
        <h2 className="mb-6">Mes projets</h2>
        <div className="projects-skill-filter flex overflow-x-scroll items-center space-x-2">
            <p className="text-md">Filter</p>
            {techsInProjects.map((tech, key) => 
            <button 
                style={{backgroundColor: tech.color}}
                className={"filter-option ".concat(selectedFilters.has(tech) ? 'filter-option-selected' : '')} key={key} onClick={() => onTechFilterClick(tech)}> 
                {/* <Image className='tech-icon' key={key} alt={tech.label} src={`tech-icons/${tech.icon}`} width={30} height={30}/>  */}
                <p>{tech.label}</p>
            </button>
            )}
            <button className="filter-option" onClick={resetFilter}> Tous </button>
        </div>
        <div className="flex flex-col space-y-6">
            {displayProjects.map((project, key) => 
                <ProjectItem 
                    key={key}
                    name={project.name} 
                    description={project.description} 
                    repoLink={project.repoLink} 
                    imagePath={project.imagePath}  
                    deploymentLink={project.deploymentLink}
                    techStack={project.techStack}
                />
            )}
        </div>
    </div>
}