export interface Project {
    name: string,
    description: string,
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
}

export const htmlCss: Tech = {
    label: 'HTML/CSS',
    icon: 'html.svg',
    color: '#f06529',
    type: 'language',
    side: 'frontend',
}

export const javascript: Tech = {
    label: 'JavaScript',
    icon: 'javascript.svg',
    color: '#f0db4f',
    type: 'language',
    side: 'frontend',
}

export const typescript: Tech = {
    label: 'TypeScript',
    icon: 'typescript.svg',
    color: '#007acc',
    type: 'language',
    side: 'frontend',
}

export const java: Tech = {
    label: 'Java',
    icon: 'java.svg',
    color: '#007396',
    type: 'language',
    side: 'backend',
}

export const php: Tech = {
    label: 'PHP',
    icon: 'php.svg',
    color: '#777bb4',
    type: 'language',
    side: 'backend',
}

export const sql: Tech = {
    label: 'SQL',
    icon: 'sql.svg',
    color: '#336791',
    type: 'language',
    side: 'backend',
}

export const c: Tech = {
    label: 'C',
    icon: 'c.svg',
    color: '#a8b9cc',
    type: 'language',
    side: 'backend',
}

export const express: Tech = {
    label: 'Express',
    icon: 'express.svg',
    color: '#000000',
    type: 'library',
    side: 'backend',
}

export const react: Tech = {
    label: 'React',
    icon: 'react.svg',
    color: '#61dafb',
    type: 'library',
    side: 'frontend',
}

export const nextJS: Tech = {
    label: 'NextJS',
    icon: 'nextjs.svg',
    color: '#000000',
    type: 'framework',
    side: 'frontend',
}

export const angular: Tech = {
    label: 'Angular',
    icon: 'angular.svg',
    color: '#dd0031',
    type: 'framework',
    side: 'frontend',
}

export const spring: Tech = {
    label: 'Spring',
    icon: 'spring.svg',
    color: '#6db33f',
    type: 'framework',
    side: 'backend',
}

export const node: Tech = {
    label: 'Node',
    icon: 'node.svg',
    color: '#339933',
    type: 'framework',
    side: 'backend',
}

export const bun: Tech = {
    label: 'Bun',
    icon: 'bun.svg',
    color: '#000000',
    type: 'framework',
    side: 'backend',
}

export const mongodb: Tech = {
    label: 'MongoDB',
    icon: 'mongo.svg',
    color: '#47a248',
    type: 'database',
    side: 'backend',
}

export const oracle: Tech = {
    label: 'Oracle',
    icon: 'oracle.svg',
    color: '#f80000',
    type: 'database',
    side: 'backend',
}

export const mysql: Tech = {
    label: 'MySQL',
    icon: 'mysql.svg',
    color: '#4479a1',
    type: 'database',
    side: 'backend',
}

export const mariaDB: Tech = {
    label: 'MariaDB',
    icon: 'mariadb.svg',
    color: '#003545',
    type: 'database',
    side: 'backend',
}

export const techSkills: Tech[] = [
    htmlCss,
    javascript,
    typescript,
    java,
    php,
    sql,
    c,
    express,
    react,
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