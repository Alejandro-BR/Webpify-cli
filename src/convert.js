import sharp from "sharp";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import convert from "heic-convert";
import { t } from "./i18n.js";

async function convertToWebP(inputPath, outputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();

    if (ext === ".heic" || ext === ".heif") {
      const tempJpgPath = await convertHEICtoJPG(inputPath);
      await sharp(tempJpgPath).webp({ quality: 100 }).toFile(outputPath);
    } else {
      await sharp(inputPath).webp({ quality: 100 }).toFile(outputPath);
    }

    console.log(chalk.green(t("convertSuccess", path.basename(outputPath))));
  } catch (err) {
    console.error(
      chalk.red(t("convertError", path.basename(inputPath))),
      err
    );
  }
}

async function convertHEICtoJPG(inputPath) {
  try {
    console.log(
      chalk.yellow(t("convertingToJPG", path.basename(inputPath)))
    );

    const inputBuffer = await fs.readFile(inputPath);
    const jpgBuffer = await convert({
      buffer: inputBuffer,
      format: "JPEG",
    });

    const tempJpgPath = inputPath.replace(/\.(heic|heif)$/i, ".jpg");
    await fs.writeFile(tempJpgPath, jpgBuffer);

    console.log(
      chalk.green(t("conversionToJPGDone", path.basename(tempJpgPath)))
    );
    return tempJpgPath;
  } catch (err) {
    console.error(chalk.red(t("conversionToJPGError", err.message)));
    throw err;
  }
}

export async function convertImagesInDirectory(directoryPath, outputPath = null) {
  try {
    const files = await fs.readdir(directoryPath);
    const imageFiles = files.filter((file) =>
      file.match(/\.(png|jpe?g|heic|heif)$/i)
    );

    if (imageFiles.length === 0) {
      console.log(chalk.yellow(t("noImagesFound")));
      return;
    }

    const outputDir = outputPath ?? path.join(directoryPath, "webp_img");
    const existed = await fs.pathExists(outputDir);
    await fs.ensureDir(outputDir);

    if (!existed) {
      console.log(chalk.gray(t("createdOutputDir", outputDir)));
    }

    console.log(chalk.green(t("imagesSavedIn", outputDir)));
    console.log(chalk.blue.bold(t("processingImages", imageFiles.length)));

    for (const file of imageFiles) {
      const inputPath = path.join(directoryPath, file);
      const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);
      await convertToWebP(inputPath, outputPath);
    }

    console.log(chalk.green(t("conversionComplete")));
  } catch (err) {
    console.error(chalk.red("❌ Error al leer el directorio:"), err);
  } finally {
    console.log("\n");
  }
}
