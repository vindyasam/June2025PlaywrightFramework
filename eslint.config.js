import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

// No import from "eslint/config" at all

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      js,
      "@typescript-eslint": tseslint,
    },

    // You can add rules here later if needed
    rules: {
      // "no-unused-vars": "warn",
    },

    extends: [
      tseslint.configs.recommended,
    ],
  },
];
