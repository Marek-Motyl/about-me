"use client";
import { getTimeFrom } from "@/utils/getTimeFrom";
import { getPluralString } from "@/utils/plurals";
import dayjs from "dayjs";
import { useMemo } from "react";

export function getStartOfWork() {
    return dayjs("2016-02-01");
}

export default function ExperienceTimer() {
    const { years, months, days } = useMemo(() => getTimeFrom(getStartOfWork(), dayjs()), []);

    const experienceTimeText = [
        getPluralString(years, {
            zero: "",
            one: "{{value}} year",
            other: "{{value}} years"
        }),
        getPluralString(months, {
            zero: "",
            one: "{{value}} month",
            other: "{{value}} months"
        }),
        getPluralString(days, {
            zero: "",
            one: "and {{value}} day",
            other: "and {{value}} days"
        }),

    ].filter(Boolean).join(" ");

    return (<span data-testid="experience-timer">{experienceTimeText}</span>);
}
