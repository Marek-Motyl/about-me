import dayjs from "dayjs";
import { getTimeFrom } from "./getTimeFrom";

describe("getTimeFrom", () => {
    it.each`
    dateFrom                | dateTo                    | expects
    ${dayjs("2024-02-05")}  | ${dayjs("2024-02-15")}    | ${{ years: 0, months: 0, days: 10 }}
    ${dayjs("2024-01-20")}  | ${dayjs("2024-02-15")}    | ${{ years: 0, months: 0, days: 26 }}
    ${dayjs("2023-01-20")}  | ${dayjs("2024-02-15")}    | ${{ years: 1, months: 0, days: 26 }}
    ${dayjs("2023-02-20")}  | ${dayjs("2024-02-15")}    | ${{ years: 0, months: 11, days: 23 }}
    ${dayjs("2023-03-05")}  | ${dayjs("2024-02-15")}    | ${{ years: 0, months: 11, days: 10 }}
    ${dayjs("2023-01-05")}  | ${dayjs("2024-02-15")}    | ${{ years: 1, months: 1, days: 10 }}
     `("should return correct time period object", ({ dateFrom, dateTo, expects }) => {
        expect(getTimeFrom(dateFrom, dateTo)).toEqual(expects);
    });
});