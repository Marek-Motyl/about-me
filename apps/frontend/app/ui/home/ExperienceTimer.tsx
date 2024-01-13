"use client"
import dayjs from "dayjs";
import { useMemo } from "react";

export function getStartOfWork() {
    return dayjs('2016-02-01');
}

export default function ExperienceTimer() {
    const { years, months, days } = useMemo(() => {
        const now = dayjs();
        const startOfWork = getStartOfWork();

        const yearsDiff = now.diff(startOfWork, 'year');
        const monthsDiff = now.diff(startOfWork, 'month');
        const currentDayOfMonth = now.date()

        return {
            years: yearsDiff, months: monthsDiff % 12, days: currentDayOfMonth
        }
    }, [])

    // TODO: plurals 
    return (<span data-testid="experience-timer">{`${years} years, ${months} months, and ${days} days`}</span>)
}
