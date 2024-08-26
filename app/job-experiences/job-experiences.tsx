import { JobExperience } from '../models/job-experiences';
import { angular, css, html, java, mariaDB, spring, typescript } from '../models/project';
import Image from 'next/image';

import './job-experiences.css';

export default function JobExperiencesPage() {
    const experiences: JobExperience[] = [
        {
            title:'Alternant en Développement Web',
            company:'BPCE-SI',
            companyLogo:'bpce.png',
            location:'Lyon, France',
            year:'2023-2024',
            description:'Alternance de 11 mois en tant que développeur web au sein de l\'entreprise BPCE-SI. J\'ai participé à la réalisation de plusieurs projets web front et back en utilisant les technologies Angular et Spring Boot.',
            techs: [
                html,
                css,
                typescript,
                java,
                angular,
                spring
            ],
            skillProgressionDescription: 'Cette alternance m\'a permis d\'atteindre un niveau professionnel en développement web fullstack.'
        }, {
            title: 'Stagiaire en Développement Web',
            company: 'Axopen',
            companyLogo: 'axopen.png',
            location: 'Lyon, France',
            year: '2023',
            description: 'Stage de 4 mois en tant que développeur web au sein de l\'entreprise Axopen. J\'ai participé à la réalisation d\'un projet web en utilisant les technologies Angular, Spring Boot et MariaDB.',
            techs: [
                html,
                css,
                typescript,
                java,
                angular,
                spring,
                mariaDB
            ],
            skillProgressionDescription: 'Ce stage m\'a offert de solides bases en développement web fullstack avec Angular et Spring Boot.'
        }
    ];

    return <div className="job-experiences-page">
       <h2 className='ml-6 mb-4'>Expériences professionelles</h2> 
       <div className="ml-6 flex flex-col space-y-8">
        { experiences.map((experience, key) =>
                <div className='card' key={key}>
                    <h3 className='card-header m-4'>{experience.title}</h3>
                    <div className="flex flex-row space-x-4">
                        <Image className="company-logo" src={`/company-logos/${experience.companyLogo}`} alt={''} height={100} width={100}/>
                        <div className="flex flex-col">
                            <h5>{experience.company}</h5>
                            <p>{experience.location}</p>
                            <p>{experience.year}</p>
                        </div>
                    </div>
                    <p className='m-4'>{experience.description}</p>
                    <div className="card-footer flex flex-col items-start">
                        <p className='mx-2'><b>{experience.skillProgressionDescription}</b></p>
                        <h4 className='mt-2'>Technologies</h4>
                        <div className="flex flex-row items-center space-x-2">
                            { experience.techs.map((tech, key) =>
                                <Image key={key} className="tech-icon" src={`/tech-icons/${tech.icon}`} alt={''} height={40} width={40}/>
                            )}
                        </div>
                    </div>
                </div>
        )}
       </div>
    </div>
}