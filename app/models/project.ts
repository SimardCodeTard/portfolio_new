import { ReactNode } from "react"

export interface Project {
    name: string,
    description: string | ReactNode,
    repoLink: string,
    imagePath: string,
    techStack: Tech[],
    deploymentLink?: string,
}


export interface Tech {
    label: string
    icon: string
    color: string
    type: string
    side: string
    wikipediaLink: string
}

export const html: Tech = {
    label: 'HTML',
    icon: 'html.svg',
    color: '#f06529',
    type: 'Langage',
    side: 'frontend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/Hypertext_Markup_Language'
}

export const css: Tech = {
    label: 'CSS',
    icon: 'css.svg',
    color: '#2965f1',
    type: 'Langage',
    side: 'frontend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade'
}

export const javascript: Tech = {
    label: 'JavaScript',
    icon: 'javascript.svg',
    color: '#f0db4f',
    type: 'Langage',
    side: 'frontend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/JavaScript'
}

export const typescript: Tech = {
    label: 'TypeScript',
    icon: 'typescript.svg',
    color: '#007acc',
    type: 'Langage',
    side: 'frontend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/TypeScript'
}

export const java: Tech = {
    label: 'Java',
    icon: 'java.svg',
    color: '#007396',
    type: 'Langage',
    side: 'backend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/Java_(langage)'
}

export const php: Tech = {
    label: 'PHP',
    icon: 'php.svg',
    color: '#777bb4',
    type: 'Langage',
    side: 'backend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/PHP'
}

export const sql: Tech = {
    label: 'SQL',
    icon: 'sql.svg',
    color: '#336791',
    type: 'Langage',
    side: 'backend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/Structured_Query_Language'
}

export const c: Tech = {
    label: 'C',
    icon: 'c.svg',
    color: '#a8b9cc',
    type: 'Langage',
    side: 'backend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/C_(langage)'
}

export const express: Tech = {
    label: 'Express',
    icon: 'express.svg',
    color: '#000000',
    type: 'Librairie',
    side: 'backend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/Express.js'
}

export const react: Tech = {
    label: 'React',
    icon: 'react.svg',
    color: '#61dafb',
    type: 'Librairie',
    side: 'frontend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/React_(JavaScript)'
}

export const threeJS: Tech = {
    label: 'ThreeJS',
    icon: 'threejs.svg',
    color: "black",
    type: "Librairie",
    side: 'frontend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/Three.js'
}

export const nextJS: Tech = {
    label: 'NextJS',
    icon: 'nextjs.svg',
    color: '#000000',
    type: 'Framework',
    side: 'frontend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/Next.js'
}

export const angular: Tech = {
    label: 'Angular',
    icon: 'angular.svg',
    color: '#dd0031',
    type: 'Framework',
    side: 'frontend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/Angular'
}

export const spring: Tech = {
    label: 'Spring',
    icon: 'spring.svg',
    color: '#6db33f',
    type: 'Framework',
    side: 'backend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/Spring_Framework'
}

export const node: Tech = {
    label: 'Node',
    icon: 'node.svg',
    color: '#339933',
    type: 'Runtime',
    side: 'backend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/Node.js'
}

export const bun: Tech = {
    label: 'Bun',
    icon: 'bun.svg',
    color: '#000000',
    type: 'Runtime',
    side: 'backend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/Bun_(logiciel)'
}

export const mongodb: Tech = {
    label: 'MongoDB',
    icon: 'mongo.svg',
    color: '#47a248',
    type: 'Base de données',
    side: 'backend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/MongoDB'
}

export const oracle: Tech = {
    label: 'Oracle',
    icon: 'oracle.svg',
    color: '#f80000',
    type: 'Base de données',
    side: 'backend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/Oracle_Database'
}

export const mysql: Tech = {
    label: 'MySQL',
    icon: 'mysql.svg',
    color: '#4479a1',
    type: 'Base de données',
    side: 'backend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/MySQL'
}

export const mariaDB: Tech = {
    label: 'MariaDB',
    icon: 'mariadb.svg',
    color: '#003545',
    type: 'Base de données',
    side: 'backend',
    wikipediaLink: 'https://fr.wikipedia.org/wiki/MariaDB'
}

export const techSkills: Tech[] = [
    html,
    css,
    javascript,
    typescript,
    java,
    php,
    sql,
    c,
    express,
    react,
    threeJS,
    nextJS,
    angular,
    spring,
    node,
    bun,
    mongodb,
    oracle,
    mysql,
    mariaDB,
]