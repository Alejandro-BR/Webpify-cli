import sharp from "sharp";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath).webp({ quality: 100 }).toFile(outputPath);
    console.log(
      chalk.green(`✅ Imagen convertida: ${path.basename(outputPath)}`)
    );
  } catch (err) {
    console.error(
      chalk.red(`❌ Error al convertir ${path.basename(inputPath)}:`),
      err
    );
  }
}

export async function convertImagesInDirectory(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);
    const imageFiles = files.filter((file) => file.match(/\.(png|jpe?g)$/i));

    if (imageFiles.length === 0) {
      console.log(
        chalk.yellow(
          "⚠️ No se encontraron imágenes PNG o JPG en el directorio."
        )
      );
      return;
    }

    const outputDir = path.join(directoryPath, "webp_img");
    await fs.ensureDir(outputDir);

    console.log(chalk.blue.bold(`🔄 Procesando ${imageFiles.length} imágenes...
`));

    for (const file of imageFiles) {
      const inputPath = path.join(directoryPath, file);
      const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);
      await convertToWebP(inputPath, outputPath);
    }

    console.log(chalk.green("🎉 Conversión completada con éxito."));
  } catch (err) {
    console.error(chalk.red("❌ Error al leer el directorio:"), err);
  } finally {
    console.log("\n");
  }
}
