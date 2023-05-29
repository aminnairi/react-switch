import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import terser from "@rollup/plugin-terser";
import remove from "rollup-plugin-delete";

export default defineConfig({
  input: "index.tsx",
  plugins: [
    remove({
      targets: [
        "build"
      ]
    }),
    esbuild(),
    terser(),
  ],
  external: ["react"],
  output: [
    {
      format: "esm",
      file: "build/index.module.js"
    },
    {
      format: "cjs",
      file: "build/index.common.js"
    },
    {
      format: "iife",
      file: "build/index.browser.js",
      name: "@aminnairi/react-switch",
      extend: true,
      globals: {
        react: "React",
      }
    }
  ],
});
