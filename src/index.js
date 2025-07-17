#!/usr/bin/env node

import { Command } from "commander";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { printAbout } from "./ui.js";
import { runAutoMode } from "./modes/autoMode.js";
import { runInputMode } from "./modes/inputMode.js";
import { runInteractiveMode } from "./modes/interactiveMode.js";
import { setLocale, t } from "./i18n.js";

const program = new Command();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkg = JSON.parse(
  readFileSync(path.join(__dirname, "..", "package.json"), "utf8")
);

const lang = process.argv.includes("--es") ? "es" : "en";
setLocale(lang);

program
  .name("webpify")
  .version(pkg.version, "-V, --version", t("helpVersion"))
  .description(t("helpDescription"))
  .helpOption("-h, --help", t("helpHelpOption"))
  .option("--input <path>", t("helpInput"))
  .option("--output <path>", t("helpOutput"))
  .option("--auto", t("helpAuto"))
  .option("--about", t("helpAbout"))
  .option("--es", t("helpEs"))

program.parse(process.argv);

const options = program.opts();

if (options.es) {
  setLocale("es");
} else {
  setLocale("en");
}

if (options.about) {
  printAbout(pkg.version);
  process.exit(0);
}

async function main() {
  if (options.auto) {
    await runAutoMode(options.output);
    return;
  }

  if (options.input) {
    await runInputMode(options.input, options.output);
    return;
  }

  await runInteractiveMode(options.output);
}

main();
