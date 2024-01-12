"use client"
import dayjs from "dayjs";
import { useMemo } from "react";

const startOfWork = dayjs('2016-02-01');

export default function ExperienceTimer() {
    const { years, months, days } = useMemo(() => {
        const now = dayjs();
        const yearsDiff = now.diff(startOfWork, 'year');
        const monthsDiff = now.diff(startOfWork, 'month');
        const currentDayOfMonth = now.date()

        return {
            years: yearsDiff, months: monthsDiff % 12, days: currentDayOfMonth
        }
    }, [])

    // TODO: i18n, unit test
    return (<span>{`${years} years, ${months} months, and ${days} days`}</span>)
}
