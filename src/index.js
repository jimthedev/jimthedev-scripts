#!/usr/bin/env node
let shouldThrow;
try {
  shouldThrow =
    require(`${process.cwd()}/package.json`).name === "jimthedev-scripts" &&
    Number(process.version.slice(1).split(".")[0]) < 8;
} catch (error) {
  // ignore
}

if (shouldThrow) {
  throw new Error(
    "You must use Node version 8 or greater to run the scripts within jimthedev-scripts " +
      "because we dogfood the untranspiled version of the scripts."
  );
}
const cmd = process.argv.slice(2)[0]

switch (cmd) {
  case "preinstall":
    require("./preinstall");
    break;
  default:
    throw new Error(`To use jimthedev-scripts you must provide a command as the first argument.`);
    break;
}

