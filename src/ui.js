import chalk from "chalk";
import { t } from "./i18n.js";

const githubUrl = "https://github.com/Alejandro-BR/Webpify-cli";
const npmUrl = "https://www.npmjs.com/package/webpify-cli";

export function displayWelcomeMessage() {
  console.log(chalk.blue.bold(t("welcome")));
}

export function displayByeMessage() {
  console.log(chalk.magenta.bold(t("bye")));
  console.log(chalk.gray(`🔗 ${githubUrl} \n`));
}

export function printAbout(version) {
  console.log(chalk.blue.bold(t("welcome").replace("Conversor de Imágenes a WebP", "Créditos").replace("Image Converter to WebP", "Credits")));

  console.log(chalk.green("😄 " + (t("uiAuthor") || "Author: ")) + "Alejandro Barrionuevo Rosado");
  console.log(chalk.green("🌐 GitHub: ") + githubUrl);
  console.log(chalk.green("📦 NPM: ") + npmUrl);
  console.log(chalk.green("🗓️  Version: ") + version);
  console.log(chalk.green(`📄 ${t("license")}`) + "MIT");
  console.log("\n");
}
