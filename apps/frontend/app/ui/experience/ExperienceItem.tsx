"use client";

import { Experience } from "@/api/experience.data";
import { memo } from "react";
import dayjs from "dayjs";
import ShowMore from "@/components/ShowMore";
import { UnorderedList, UnorderedListItem } from "@/components/UnorderedList";
import Tag from "@/components/Tag";

interface Props {
    item: Experience;
}

function ExperienceItem({ item }: Props) {
    return (
        <li className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 grow-1 flex-shrink-0">
                <div className="sticky top-[112px]">
                    <div className="flex flex-col">
                        <div className="text-3xl font-bold">{item.company}</div>
                        <div>{item.location}</div>
                        <div>{item.title}</div>
                        <div>
                            <span>{dayjs(item.startDate).format("MMMM YYYY")}</span>
                            &nbsp;-&nbsp;
                            <span>{dayjs(item.endDate).format("MMMM YYYY")}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 grow-2 flex-col gap-4 items-start">
                <div className="text-xl md:text-2xl font-bold">{item.project}</div>
                <p>{item.description.join(". ")}</p>
                <ShowMore expandText="Show more" storageKey={`experience-${item.id}`}>
                    <UnorderedList>
                        {item.responsibilities.map((achievement, index) =>
                            <UnorderedListItem key={index}>
                                {achievement}
                            </UnorderedListItem>
                        )}
                    </UnorderedList>
                    <div className="flex flex-wrap gap-2 ">
                        {item.technologies.map((technology) =>
                            <Tag key={technology} text={technology} />
                        )}
                    </div>
                </ShowMore>
            </div>
        </li>
    );
}


export default memo(ExperienceItem);