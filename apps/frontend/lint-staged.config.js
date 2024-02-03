module.exports = {
    "**/*.(ts|tsx)": () => "npx tsc --noEmit",
    "**/*.(ts|tsx|js|jsx)": (filenames) => [
        `npx eslint --fix ${filenames.join(" ")}`,
    ]
};