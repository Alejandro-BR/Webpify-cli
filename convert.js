import sharp from "sharp";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import convert from "heic-convert";

async function convertToWebP(inputPath, outputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();

    if (ext === ".heic" || ext === ".heif") {
      const tempJpgPath = await convertHEICtoJPG(inputPath);
      await sharp(tempJpgPath).webp({ quality: 100 }).toFile(outputPath);
    } else {
      await sharp(inputPath).webp({ quality: 100 }).toFile(outputPath);
    }

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

async function convertHEICtoJPG(inputPath) {
  try {
    console.log(
      chalk.yellow(`🔄 Convirtiendo ${path.basename(inputPath)} a JPG...`)
    );

    const inputBuffer = await fs.readFile(inputPath);
    const jpgBuffer = await convert({
      buffer: inputBuffer,
      format: "JPEG",
    });

    const tempJpgPath = inputPath.replace(/\.(heic|heif)$/i, ".jpg");
    await fs.writeFile(tempJpgPath, jpgBuffer);

    console.log(
      chalk.green(
        `✅ Conversión a JPG completada: ${path.basename(tempJpgPath)}`
      )
    );
    return tempJpgPath;
  } catch (err) {
    console.error(
      chalk.red(`❌ Error al convertir HEIC a JPG: ${err.message}`)
    );
    throw err;
  }
}

export async function convertImagesInDirectory(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);
    const imageFiles = files.filter((file) =>
      file.match(/\.(png|jpe?g|heic|heif)$/i)
    );

    if (imageFiles.length === 0) {
      console.log(
        chalk.yellow(
          "⚠️  No se encontraron imágenes PNG o JPG en el directorio."
        )
      );
      return;
    }

    const outputDir = path.join(directoryPath, "webp_img");
    await fs.ensureDir(outputDir);

    console.log(
      chalk.blue.bold(`🔄 Procesando ${imageFiles.length} imágenes...
`)
    );

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
