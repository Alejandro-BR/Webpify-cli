import chalk from 'chalk';
import { askForDirectory, confirmExit } from './menu.js';
import { convertImagesInDirectory } from './convert.js';

async function main() {
  let exit = false;

  do {
    console.clear();
    console.log(chalk.blue.bold("\n✨ Webpify - Conversor de Imágenes a WebP ✨\n"));

    const directoryPath = await askForDirectory();
    console.log(chalk.blue(`📂 Directorio seleccionado: ${directoryPath}\n`));

    await convertImagesInDirectory(directoryPath);

    exit = await confirmExit();

  } while (!exit);

  console.log(chalk.magenta.bold("\n👋 ¡Hasta la próxima! 👋\n"));
  console.log(chalk.gray("🔗 Alejandro Barrionuevo Rosado - https://github.com/Alejandro-BR/Webpify \n"));
}

main();
