import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import process from "process";
import { config } from "dotenv";
import { readFileSync } from "fs";

config();

const prod = process.argv[2] === "production";

/** This determines where the output file goes.
 * npm run dev will put it in OUTDIR specified in your .env
 * npm run build will place it in the build directory in this repository.
 */
const dir = prod ? "./build" : process.env.OUTDIR;
const file = `${dir}/Sanctum.css`;

/**
 * readFileSync reads the file data in as a string.
 */
const banner = readFileSync("./scss/abstracts/_version.scss", { encoding: "utf8" });
const footer = readFileSync("./scss/extensions/_style-settings.scss", {
	encoding: "utf8"
});

esbuild
	.build({
		/** Entry point should be where everything is imported into. */
		entryPoints: ["scss/base.scss"],
		/** npm run dev will watch for file changes and rebuild instantly. */
		watch: !prod,
		/** Banner places the content at the beginning of the bundled file. */
		banner: {
			css: banner
		},
		/** Footer places the content at the end of the bundled file. */
		footer: {
			css: footer
		},
		logLevel: "info",
		bundle: true,
		minify: true,
		plugins: [sassPlugin()],
		outfile: file
	})
	.catch(() => process.exit(1));
