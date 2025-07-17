import chalk from "chalk";
import { convertImagesInDirectory } from "../convert.js";
import { displayWelcomeMessage, displayByeMessage } from "../ui.js";
import { t } from "../i18n.js";

export async function runAutoMode(outputPath) {
  displayWelcomeMessage();
  const currentDir = process.cwd();
  console.log(chalk.cyan(t("runningAutoMode", currentDir)));
  await convertImagesInDirectory(currentDir, outputPath);
  displayByeMessage();
}
