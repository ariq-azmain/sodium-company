import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals.js"; // এখানে .js যোগ করুন
import nextTs from "eslint-config-next/typescript.js"; // এখানে .js যোগ করুন

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    ignores: [
      ".next/*",
      "out/*",
      "build/*",
      "next-env.d.ts",
    ],
  },
]);

export default eslintConfig;
