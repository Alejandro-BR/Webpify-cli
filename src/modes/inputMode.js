import chalk from "chalk";
import fs from "fs-extra";
import { convertImagesInDirectory } from "../convert.js";
import { displayWelcomeMessage, displayByeMessage } from "../ui.js";
import { t } from "../i18n.js";

export async function runInputMode(inputPath, outputPath) {
  displayWelcomeMessage();

  const inputOk =
    (await fs.pathExists(inputPath)) && (await fs.lstat(inputPath)).isDirectory();

  if (!inputOk) {
    console.error(chalk.red(t("errorInvalidPath", inputPath)));
    process.exit(1);
  }

  console.log(chalk.cyan(t("runningInputMode", inputPath)));

  await convertImagesInDirectory(inputPath, outputPath);

  displayByeMessage();
}
