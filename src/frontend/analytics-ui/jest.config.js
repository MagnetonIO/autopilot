/* eslint-disable */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    //preset: "ts-jest",
    roots: ["src", "tests"],
    moduleDirectories: ["node_modules", "src"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest",
    },
    transformIgnorePatterns: ["!node_modules/"],
    preset: "ts-jest/presets/js-with-babel",
};
/* eslint-enable */
