#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { askForDirectory, confirmExit } from './menu.js';
import { convertImagesInDirectory } from './convert.js';
import { printAbout } from './about.js';

const program = new Command();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkg = JSON.parse(readFileSync(path.join(__dirname, 'package.json'), 'utf8'));

program
  .name('webpify')
  .version(pkg.version)
  .description('Conversor de imágenes a WebP desde la terminal')
  .option('--input <path>', 'Convierte automáticamente una carpeta específica')
  .option('--auto', 'Convierte automáticamente el directorio actual sin menú')
  .option('--about', 'Muestra información sobre el autor y el proyecto');

program.parse(process.argv);

const options = program.opts();

if (options.about) {
  printAbout(pkg.version);
  process.exit(0);
}

async function main() {
  if (options.auto) {
    const currentDir = process.cwd();
    console.log(chalk.cyan(`🚀 Ejecutando en modo automático en: ${currentDir}`));
    await convertImagesInDirectory(currentDir);
    return;
  }

  if (options.input) {
    console.log(chalk.cyan(`🚀 Ejecutando en modo input con ruta: ${options.input}`));
    await convertImagesInDirectory(options.input);
    return;
  }

  let exit = false;
  do {
    console.clear();
    console.log(chalk.blue.bold("\n✨ Webpify - Conversor de Imágenes a WebP ✨\n"));

    const directoryPath = await askForDirectory();
    console.log(chalk.blue.bold(`📂 Directorio seleccionado: ${directoryPath}\n`));

    await convertImagesInDirectory(directoryPath);

    exit = await confirmExit();
  } while (!exit);

  console.log(chalk.magenta.bold("\n👋 ¡Hasta la próxima! 👋\n"));
  console.log(chalk.gray("🔗 https://github.com/Alejandro-BR/Webpify-cli \n"));
}

main();
