import fs from 'fs-extra';
import inquirer from 'inquirer';
import { t } from './i18n.js';

export async function askForDirectory() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "directoryPath",
      message: t("inputDirMessage"),
      validate: input =>
        fs.existsSync(input) && fs.lstatSync(input).isDirectory()
          ? true
          : t("errorInvalidPath", input),
    },
  ]);
  return answers.directoryPath;
}

export async function confirmExit() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "confirm",
    message: t("confirmExitMessage"),
    choices: t("choicesExit"),
  });

  return answer.confirm === t("choicesExit")[0];
}
