/* eslint-disable */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:react/recommended",
        "google",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "prettier", "import", "unused-imports"],
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: "./tsconfig.json",
            },
        },
        react: {
            version: "detect",
        },
    },
    rules: {
        quotes: ["error", "double"],
        "linebreak-style": "off", // don't care about windows vs unix newline differences
        "max-len": ["error", { code: 120 }], // can add exceptions to line length rule here
        "eol-last": ["off", "never"], // don't care about files ending in newline
        "prefer-const": "warn",
        "require-jsdoc": "off",
        "import/no-named-as-default-member": "off",
        "import/no-unresolved": "error",
        "import/order": [
            "warn",
            {
                groups: ["builtin", "external", "internal", ["sibling", "parent"], "index", "unknown"],
                pathGroups: [
                    {
                        pattern: "react*",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "{assets,components,context,libs,redux}/**",
                        group: "internal",
                    },
                ],
                pathGroupsExcludedImportTypes: ["react", "redux"],
                "newlines-between": "never",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
        "unused-imports/no-unused-imports": "error", // auto removes unused imports
        "unused-imports/no-unused-vars": [
            "warn",
            { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
        ],
        "no-unused-vars": "off", // typescript version is "warn", so having this "on" or "warn" creates redundant errors/warnings
        "@typescript-eslint/no-unused-vars": "off",
        "object-curly-spacing": ["error", "always"],
        "no-prototype-builtins": "off", // Object.protype functions
        "@typescript-eslint/no-empty-interface": "warn",
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "no-constant-condition": "off",
        //"@typescript-eslint/ban-ts-comment": "warn", // manually hiding TS compile errors generates eslint warning
        "@typescript-eslint/ban-ts-comment": [
            "error",
            { "ts-ignore": "allow-with-description", "ts-expect-error": "allow-with-description" },
        ],
    },
};
/* eslint-enable */
