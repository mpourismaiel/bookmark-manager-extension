const esbuild = require("esbuild");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const buildOptions = {
  entryPoints: ["./pages/newtab/scripts/index.js"],
  outfile: "./pages/newtab/build/index.build.js",
  bundle: true,
  minify: isProduction,
  sourcemap: !isProduction,
  logLevel: "info",
  define: {
    "process.env.API_URL": JSON.stringify(
      process.env.API_URL || "http://localhost:3000/api/v1"
    ),
  },
};

let run = () =>
  esbuild
    .build(buildOptions)
    .then(() => console.log("⚡ Production build done"))
    .catch(() => process.exit(1));

if (!isProduction) {
  run = async () => {
    const ctx = await esbuild.context(buildOptions);

    ctx
      .watch()
      .then(() => {
        console.log(`⚡ Development build done, watching for changes...`);
      })
      .catch(() => process.exit(1));
  };
}

run();
