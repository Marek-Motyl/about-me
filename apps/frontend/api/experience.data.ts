export interface Experience {
    id: string;
    company: string;
    description: string[];
    endDate: string | null;
    location: string;
    project: string;
    remote: boolean;
    responsibilities: string[];
    startDate: string;
    technologies: string[]
    title: string;
    www?: string;
}

export const data: Experience[] = [{
    id: "1",
    title: "Fullstack developer",
    company: "IKEA",
    location: "Malmö, Sweden",
    remote: true,
    project: "Kitchen Planner Range Management System",
    www: "https://kitchen.planner.ikea.com/us/en/",
    description: [
        `The Range Management System project is a critical component within the Kitchen Planner landscape`,
        `Developed to maintain and configure the widely-used Kitchen Planner app, this system serves as the backbone for ensuring optimal functionality and support`,
        `With a global footprint, it provides essential support to almost 60 retail units worldwide, managing a vast array of products`,
        `The project's scope includes intricate setup mechanisms and ongoing maintenance to guarantee that the Kitchen Planner remains online`,
    ],
    responsibilities: [
        "Enhanced performance in critical subsystems through optimization efforts",
        "Conducted maintenance tasks and delivered innovative features",
        "Contributed to the development and optimization of the project's internal query language, elevating data retrieval and manipulation capabilities",
        "Implemented an in-house design system for the project",
        "Developed a VS Code extension to improve developers' daily work",
        "Created a CLI tool to enhance developers' experiences in environment deployments and release scheduling",
        "Functioned as a solutions designer for various features",
        "Served as an evangelist in the Automation QA team",
        "Mentored colleagues to foster their professional growth",
        "Presented internal demos to showcase project progress and features",
        "Resolved production incidents efficiently",
        "Thrived in a self-organizing environment"
    ],
    startDate: "2022-06-09",
    endDate: "2024-01-04",
    technologies: [
        "Serverless",
        "AWS",
        "Lambda",
        "Step functions",
        "SQS",
        "EventBridge",
        "ApiGateway",
        "CloudFront",
        "RDS",
        "OpenSearch",
        "DynamoDB",
        "Redis",
        "S3",
        "Jsonschema",
        "React",
        "TypeScript",
        "React Query (TanStack Query)",
        "Formik",
        "Jest",
        "Cypress",
        "React testing library",
        "Styled Components",
        "GitHub Actions",
        "RWD"
    ]
},
{
    id: "2",
    title: "Frontend developer",
    company: "Ework Group",
    location: "Warszawa, Poland",
    remote: true,
    project: "Contractors Recruitment System; ATS",
    www: "https://www.eworkgroup.com/",
    description: [
        "Contractors Recruitment System, creating a streamlined and efficient process for managing job applications",
        "Implemented features that not only enhanced candidate tracking and improved communication within the hiring team but also incorporated metrics to track performance",
        "Together with the client portal, the Contractors Recruitment System provided an end-to-end experience across the entire recruitment process"
    ],
    responsibilities: [
        "Collaborated with Designers to establish a comprehensive design system and reusable components library, fostering consistency and efficiency throughout the application",
        "Ensured scalability, responsiveness, and an optimal user experience by incorporating the latest advancements in frontend development",
        "Throughout my tenure as a project member, consistently maintained the project's through multiple generations of React",
        "Conceptualized and executed a user friendly client portal for tracking job applications, delivering real - time updates and enhancing the overall client experience",
        "Conducted regular team meetings and workshops to promote collaboration, share insights, and proactively address challenges",
        "Consistently taking a lead role within the team, actively participating in business meetings, and serving as the presenter during demos"
    ],
    startDate: "2019-05-03",
    endDate: "2022-05-06",
    technologies: [
        "React",
        "TypeScript",
        "Webpack",
        "SCSS",
        "theme-ui",
        "Cypress",
        "Jest",
        "Formik",
        "React hook forms",
        "React testing library",
        "React Query",
        "Redux",
        "Zod",
        "Yup",
        "i18n",
        "Storybook",
        "RWD"
    ]
}];