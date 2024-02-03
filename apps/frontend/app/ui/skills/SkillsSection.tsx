import { UnorderedList, UnorderedListItem } from "@/components/UnorderedList";
import clsx from "clsx";
import { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    sectionName: ReactNode;
    skills: string[];
}

export default function SkillsSection({ sectionName, skills, className, ...rest }: Props) {
    return (
        <div className={clsx("flex flex-1 flex-col flex-grow-1 gap-4", className)} {...rest}>
            <div className="text-2xl font-bold">{sectionName}</div>
            <UnorderedList >
                {skills.map((skill) =>
                    <UnorderedListItem key={skill}>
                        {skill}
                    </UnorderedListItem>
                )}
            </UnorderedList>
        </div>
    );
}
