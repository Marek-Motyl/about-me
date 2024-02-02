import { getPluralString } from "./plurals";


describe("getPluralString", () => {
    it.each`
    value   | text
    ${0}    | ${"zero"}
    ${1}    | ${"one"}
    ${2}    | ${"other"}
    `("should use correct cardinal rule", ({ value, text }) => {
        expect(getPluralString(value, { zero: "zero", one: "one", other: "other" })).toBe(text);
    });

    it("should parse value correctly", ()=>{
        expect(getPluralString(1, {  one: "{{value}} one", })).toBe("1 one");
    });
});