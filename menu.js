import fs from 'fs-extra';
import inquirer from 'inquirer';

export async function askForDirectory() {
  const answers = await inquirer.prompt([
      {
          type: "input",
          name: "directoryPath",
          message: "📝 Ingresa la ruta completa del directorio con imágenes:",
          validate: input => fs.existsSync(input) && fs.lstatSync(input).isDirectory() ? true : "❌ Ruta no válida. Inténtalo de nuevo."
      }
  ]);
  return answers.directoryPath;
}

export async function confirmExit() {
  const answer = await inquirer.prompt({
      type: "list",
      name: "confirm",
      message: "¿Deseas salir o ejecutar el programa de nuevo?",
      choices: ["Salir", "Ejecutar de nuevo"]
  });

  return answer.confirm === "Salir";
}

