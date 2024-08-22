export interface Skill {
    label: string;
    y1Desc: string;
    y2Desc: string;
    y3Desc?: string;
}

export const skillRealiser: Skill = {
    label: 'Réaliser',
    y1Desc: 'Développer des applications informatiques simples',
    y2Desc: 'Partir des exigences et aller jusqu\'à une application complète',
    y3Desc: 'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)'
}

export const skillOptimiser: Skill = {
    label: 'Optimiser',
    y1Desc: 'Appréhender et construire des algorithmes',
    y2Desc: 'Sélectionner les algorithmes adéquats pour répondre à un problème donné',
    y3Desc: 'Analyser et optimiser des applications'
}

export const skillAdministrer: Skill = {
    label: 'Administrer',
    y1Desc: 'Installer et configurer un poste de travail',
    y2Desc: 'Déployer des services dans une architecture réseau',
}

export const skillGerer: Skill = {
    label: 'Gérer',
    y1Desc: 'Concevoir et mettre en place une base de données à partir d\'un cahier des charges client',
    y2Desc: 'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité',
}

export const skillConduire: Skill = {
    label: 'Conduire',
    y1Desc: 'Identifier les besoins métiers des clients et des utilisateurs',
    y2Desc: 'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',
}

export const skillCollaborer: Skill = {
    label: 'Collaborer',
    y1Desc: 'Identifier ses aptitudes pour travailler dans une équipe',
    y2Desc: 'Situer son rôle et ses missions au sein d\'une équipe informatique',
    y3Desc: 'Manager une équipe informatique'
}

export const skills: Skill[] = [
    skillRealiser,
    skillOptimiser,
    skillAdministrer,
    skillGerer,
    skillConduire,
    skillCollaborer
]