import { includeIgnoreFile } from "@eslint/compat"
import eslint from "@eslint/js"
import * as path from "node:path"
import tsEslint from "typescript-eslint"

const gitIgnorePath = path.resolve(__dirname, ".gitignore")

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  includeIgnoreFile(gitIgnorePath),
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      "eqeqeq": "error",
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-type-assertion": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/restrict-plus-operands": ["error", {
        "allowAny": false,
        "allowBoolean": false,
        "allowNullish": false,
        "allowNumberAndString": false,
        "allowRegExp": false,
      }],
      "@typescript-eslint/restrict-template-expressions": "error",
      "@typescript-eslint/strict-boolean-expressions": ["error", {
        "allowNumber": false,
        "allowString": false,
      }],
      "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
    },
  },
)
