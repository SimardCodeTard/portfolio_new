import { Tech } from "./project";

export interface JobExperience {
    title: string;
    company: string;
    companyLogo: string;
    location: string;
    year: string;
    description: string;
    techs: Tech[];
    skillProgressionDescription: string;
}