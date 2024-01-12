export interface Experience {
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
}

export const data: Experience[] = [{
    title: "Fullstack developer",
    company: "IKEA",
    location: 'Malmö, Sweden',
    remote: true,
    project: 'Kitchen Planner Range Management System',
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
    startDate: "2022-06-06",
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
    ]
}]