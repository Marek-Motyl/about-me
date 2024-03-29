"use client";

import { Experience } from "@/api/experience.data";
import { memo } from "react";
import ExperienceItem from "./ExperienceItem";

interface Props {
    data: Experience[];
}

function ExperienceList({ data }: Props) {
    return (
        <ol className="flex flex-col gap-8">
            {data.map(item => <ExperienceItem key={`${item.company}-${item.startDate}`} item={item} />)}
        </ol>
    );
}


export default memo(ExperienceList);