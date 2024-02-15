import dayjs from "dayjs";

interface TimeFrom {
    years: number;
    months: number;
    days: number;
}

export function getTimeFrom(from: dayjs.Dayjs, to: dayjs.Dayjs): TimeFrom {
    const yearsDiff = to.diff(from, "year");
    const monthsDiff = to.diff(from, "month");
    const days = to.subtract(monthsDiff, "months").diff(from, "days");

    return {
        years: yearsDiff, months: monthsDiff % 12, days
    };
}