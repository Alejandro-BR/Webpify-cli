import chalk from "chalk";
import { askForDirectory, confirmExit } from "../menu.js";
import { convertImagesInDirectory } from "../convert.js";
import { displayWelcomeMessage, displayByeMessage } from "../ui.js";
import { t } from "../i18n.js";

export async function runInteractiveMode(outputPath) {
  let exit = false;

  do {
    console.clear();
    displayWelcomeMessage();

    const directoryPath = await askForDirectory();
    console.log(
      chalk.blue.bold(t("selectedDir", directoryPath))
    );

    await convertImagesInDirectory(directoryPath, outputPath);

    exit = await confirmExit();
  } while (!exit);

  console.log("\n");
  displayByeMessage();
}
