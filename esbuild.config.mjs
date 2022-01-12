import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import process from "process";
import { config } from "dotenv";

config();

const prod = process.argv[2] === "production";

/** This determines where the output file goes.
 * npm run dev will put it in OUTDIR specified in your .env
 * npm run build will place it in the build directory in this repository.
 */
const dir = prod ? "./build" : process.env.OUTDIR;
const file = `${dir}/Sanctum.css`

esbuild
    .build({
        /** Entry point should be where everything is imported into. */
        entryPoints: ["scss/base.scss"],
        /** npm run dev will watch for file changes and rebuild instantly. */
        watch: !prod,
        logLevel: "info",
        plugins: [sassPlugin()],
        outfile: file
    })
    .catch(() => process.exit(1));
