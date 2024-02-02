const enCardinalRules = new Intl.PluralRules("en-US");

type Plurals = Record<Intl.LDMLPluralRule, string>;

/**
 * Based on provided number, pick proper string and replace value in template
 * use {{value}} to replace with number
 *
 */
export function getPluralString(number: number, plurals: Partial<Plurals>): string {
    if (number === 0) {
        return plurals.zero || "";
    }

    const cardinalRule = enCardinalRules.select(number);
    const template = plurals[cardinalRule] || "";

    return template.replaceAll("{{value}}", number.toString());
}