'use client';

import { useState } from "react";
import { angular, htmlCss, javascript, mariaDB, mongodb, nextJS, Project, react, spring, sql, Tech, threeJS, typescript } from "../models/project";
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
            name: 'Infinite Stories',
            description: "Une application web avec Spring Boot et Angular qui génère à l'infini des jeux de rôle à l'aide de GPT-4. L'utiisateur choisit le monde dans lequel se déroulera le jeu et écrit une description pour son personnage. J'ai prévu un système de combat similaire à Dungeons and Dragons, avec un système de dés et de compétences.",
            repoLink: "https://github.com/SimardCodeTard/infinite-stories",
            imagePath: "/shrek.png",
            techStack: [
                angular,
                typescript,
                htmlCss,
                spring,
                mariaDB  
            ]
        },{
            name: 'ThreeJS Solar System',
            description: "Un mini projet fait avec la librairie ThreeJS qui affiche une représenation du système solaire.",
            repoLink: "https://github.com/SimardCodeTard/threeJS-solar-system",
            deploymentLink: "https://three-js-solar-sytem.vercel.app/",
            imagePath: "/shrek.png",
            techStack: [
                typescript,
                threeJS
            ]
        },{
            name: 'Ce portfolio',
            description: "L'application sur laquelle vous vous trouvez en ce moment même !",
            repoLink: "https://github.com/SimardCodeTard/portfolio_new",
            imagePath: "/shrek.png",
            techStack: [
                nextJS,
                react,
                typescript,
                htmlCss,
            ]
        },{
            name: 'Nuit de l\'Info - Stardust Programmers',
            description: <>Une application web créée pour l&apos;évennement \&quot;La Nuit de l&apos;Info\&quot; durant lequel des équipe de toutes les écoles d&apos;informatique de Lyon se retrouvent et développent une application suivant un sujet commun en une nuit. Il s&apos;agit d&apos;une campagne de sensibilisation sur les idées reçues autour du réchauffement climatique. Plusieurs défis sont présentés par des entreprise lors de cet évennement, nous avons notemment gagné le défi d&apos;utilisation de l&apos;Intelligence Artificielle proposé par l&apos;ESN lyonnaise Axopen. <b>Malheuresement, notre accès à l&apos;API d&apos;OpenAI a expiré et la page &quote;facts&quote; qui présenatait des faits infinis sur le changement climatique générés par GPT-4 ne fonctionne plus.</b></>,
            repoLink: "https://github.com/Lhokamn/stardust-programmers",
            deploymentLink: "https://stardust-programers.vercel.app/",
            imagePath: "/shrek.png",
            techStack: [
                nextJS,
                react,
                javascript,
                htmlCss,
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

    const techsInProjects = projects.flatMap(project => project.techStack.map(ts => ts)).map(tech => tech).filter((tech, index, self) => self.indexOf(tech) === index);

    return <div className="projects-page">
        <h2 className="mx-6 mbπ-6">Mes projets</h2>
        <div className="projects-skill-filter flex flex-col space-y-2">
            <p className="text-md">Filter</p>
            <div className="overflow-x-scroll   ">
                <div className="flex items-center w-fit space-x-2">
                    {techsInProjects.map((tech, key) => 
                        <button 
                            style={{backgroundColor: tech.color}}
                            className={"filter-option ".concat(selectedFilters.has(tech) ? 'filter-option-selected' : '')} key={key} onClick={() => onTechFilterClick(tech)}> 
                            {/* <Image className='tech-icon' key={key} alt={tech.label} src={`tech-icons/${tech.icon}`} width={30} height={30}/>  */}
                            {tech.label}
                        </button>
                    )}
                </div>
            </div>
            <button className="filter-option reset-filter-option" onClick={resetFilter}> Tous </button>
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