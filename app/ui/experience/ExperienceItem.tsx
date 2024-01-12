"use client"

import { Experience } from "@/data/experience.data";
import { memo } from "react";
import dayjs from "dayjs";
import ShowMore from "@/components/ShowMore";
import { UnorderedList, UnorderedListItem } from "@/components/UnorderedList";

interface Props {
    item: Experience;
}

function ExperienceItem({ item }: Props) {
    return (
        <li className="flex flex-col md:flex-row gap-4 ">
            <div className="flex-1 grow-1 flex-shrink-0 flex-col">
                <div>
                    {item.company}
                </div>
                <div>
                    {item.location}
                </div>
                <div>
                    {item.title}
                </div>
                <div>
                    <span>
                        {dayjs(item.startDate).format('MMMM YYYY')}
                    </span>
                    &nbsp;-&nbsp;
                    <span>
                        {dayjs(item.endDate).format('MMMM YYYY')}
                    </span>
                </div>
            </div>
            <div className="flex flex-1 grow-2 flex-col gap-4 items-start">
                <div className="text-xl font-bold">{item.project}</div>
                <p className="text-justify">
                    {item.description.join('. ')}
                </p>

                <ShowMore expandText="Show more">
                    <UnorderedList>
                        {item.responsibilities.map((achievement, index) =>
                            <UnorderedListItem key={index}>
                                {achievement}
                            </UnorderedListItem>
                        )}
                    </UnorderedList>
                </ShowMore>

            </div>

        </li>
    )
}


export default memo(ExperienceItem)