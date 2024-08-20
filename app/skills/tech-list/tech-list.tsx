'use client';

import { techSkills } from "@/app/models/project" 
import Image from "next/image"
import { useState } from "react"
import HelpIcon from '@mui/icons-material/Help';
import Link from "next/link";

export default function TechList () {
    const [displayTechs, setDisplayTechs] = useState(techSkills);
    const [selectedTechTypes, setSelectedTechTypes] = useState(new Set<string>());

    const filterTechByTypes = (types: Set<string>) => {
        if(types.size === 0) {
            resetFilter();
            return;
        }
        setDisplayTechs(techSkills.filter(tech => types.has(tech.type)));
    }

    const selectTechTypeFilter = (tech: string) => {
        selectedTechTypes.add(tech);
        setSelectedTechTypes(new Set(selectedTechTypes));
        filterTechByTypes(selectedTechTypes);
    } 

    const onTechTypeFilterOptionClick = (techType: string) => {
        if(!selectedTechTypes.has(techType)) {
            selectTechTypeFilter(techType);
        } else {
            selectedTechTypes.delete(techType);
            filterTechByTypes(selectedTechTypes);
        }
    }

    const resetFilter = () => {
        setSelectedTechTypes(new Set<string>());
        setDisplayTechs(techSkills);
    }

    const techTypes = techSkills.map(tech => tech.type).filter((type, index, self) => self.indexOf(type) === index).sort((a, b) => a.localeCompare(b));

    return <div className='tech-list flex flex-col w-full items-center justify-center'>
        <h3 className="mx-6 mr-auto">Technologies</h3>
        <div className="filter tech-skill-filter flex flex-row space-x-2">{ techTypes.map((type, key) =>
                <button 
                    className={"filter-option tech-skill-filter-option".concat(selectedTechTypes.has(type) ? ' filter-option-selected' : '')} 
                    key={key} 
                    onClick={() => onTechTypeFilterOptionClick(type)}
                >
                    {type}
                </button>
            )}
            <button className="filter-option reset-filter-option" onClick={resetFilter}> Tous </button>
        </div>
        <div className="techs-wrapper flex flex-wrap items-center justify-center">
            {displayTechs.map((tech, key) =>
                <div key={key} className='tech-item flex flex-col justify-center'>
                    <Image className="tech-item-icon" height={50} width={50} src={`tech-icons/${tech.icon}`} alt={''}/>
                    <h3>{tech.label}</h3>
                    <div className="tech-item-footer flex items-center justify-between w-full mt-2">
                        <div className='tech-type-label'>{tech.type}</div>
                        <Link className="text-white" href={tech.wikipediaLink}><HelpIcon></HelpIcon></Link>
                    </div>
                </div>
            )}
        </div>
    </div>
}