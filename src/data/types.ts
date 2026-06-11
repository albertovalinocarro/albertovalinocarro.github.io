export interface Labels {
    summary: string;
    skills: string;
    experience: string;
    education: string;
    projects: string;
    personalProjects: string;
    extras: string;
    contact: string;
    contactNameLabel: string;
    contactNamePlaceholder: string;
    contactEmailLabel: string;
    contactEmailPlaceholder: string;
    contactMessageLabel: string;
    contactMessagePlaceholder: string;
    contactSend: string;
    contactSending: string;
    contactSuccess: string;
    contactError: string;
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    points: string[];
}

export interface EducationEntry {
    title: string;
    year: string;
}

export interface SkillGroup {
    label: string;
    items: string[];
}

export interface PersonalProject {
    name: string;
    url: string;
    period: string;
    stack: string[];
    summary: string;
    points: string[];
}

export interface Socials {
    email: string;
    github: string;
    location: string;
    linkedin: string;
}

export interface Resume {
    name: string;
    title: string;
    email: string;
    location: string;
    labels: Labels;
    summary: string;
    skills: string[];
    skillGroups: SkillGroup[];
    experience: Experience[];
    education: EducationEntry[];
    projects: string[];
    personalProjects: PersonalProject[];
    extras: string[];
    socials: Socials;
}
