import MockDate from "mockdate";
import { render, screen } from "@testing-library/react";
import ExperienceTimer from "./ExperienceTimer";

describe("ExperienceTimer", () => {
    it.each`
    date               | text
    ${"2024-02-01"}    | ${"8 years"}
    ${"2024-02-02"}    | ${"8 years and 1 day"}
    ${"2024-03-01"}    | ${"8 years 1 month"}
    ${"2024-04-02"}    | ${"8 years 2 months and 1 day"}
     `("should displays correct text", ({ date, text }) => {
        MockDate.set(date);

        render(<ExperienceTimer />);

        expect(screen.getByTestId("experience-timer")).toHaveTextContent(text);
    });
});