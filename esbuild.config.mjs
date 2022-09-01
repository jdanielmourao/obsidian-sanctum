/**
 * Thank you to @valentine195 for not only setting my first esbuild config,
 * but also taking the time to explain each step.
 */

import esbuild from "esbuild";
import process from "process";
import { config } from "dotenv";
import { sassPlugin } from "esbuild-sass-plugin";
import time from "esbuild-plugin-time";
import { readFileSync } from "fs";

config();

const prod = process.argv[2] === "production";

/** This determines where the output file goes.
 * npm run dev will put it in OUTDIR specified in your .env
 * npm run build will place it in the build directory in this repository.
 */
const dir = prod ? "./" : process.env.OUTDIR;

/** Paths for final file */
const fileProd = `${dir}/theme.css`;
const fileDev = `${dir}/SanctumDev.css`

/** readFileSync reads the file data in a string. */
const license = readFileSync("./src/css/license.css", "utf8");
const hub = readFileSync("./src/css/plugin-compatibility.css", "utf8");

esbuild
	.build({
		/** Entry point should be where everything is imported into. */
		entryPoints: ["src/scss/index.scss"],
		
		/** Banner places the content at the beginning of the bundled file. */
		banner: {
			css: license
		},
		/** Footer places the content at the end of the bundled file. */
		footer: {
			css: hub
		},
		/** npm run dev will watch for file changes and rebuild instantly. */
		watch: !prod,
		logLevel: "info",
		bundle: true,
		minify: false,
		outfile: prod ? fileProd : fileDev,
		plugins: [sassPlugin(), time()]
	})
	.catch(() => process.exit(1));