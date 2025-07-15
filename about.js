import chalk from 'chalk';

export function printAbout(version) {
  console.log(chalk.blue.bold('\n✨ Webpify - Créditos ✨\n'));
  console.log(chalk.green('😄 Autor: ') + 'Alejandro Barrionuevo Rosado');
  console.log(chalk.green('🌐 GitHub: ') + 'https://github.com/Alejandro-BR/Webpify-cli');
  console.log(chalk.green('📦 NPM: ') + 'https://www.npmjs.com/package/webpify-cli');
  console.log(chalk.green('🗓️  Versión: ') + version);
  console.log(chalk.green('📄 Licencia: ') + 'MIT');
  console.log('\n');
}