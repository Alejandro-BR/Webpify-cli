export const locales = {
  en: {
    welcome: "\n✨ Webpify - Image Converter to WebP ✨\n",
    bye: "👋 See you next time! 👋\n",
    errorInvalidPath: (path) => `❌ The path is not valid: ${path}`,
    processingImages: (count) => `🔄 Processing ${count} images...`,
    imagesSavedIn: (dir) => `📤 Converted images will be saved in: ${dir}\n`,
    noImagesFound: "⚠️ No PNG or JPG images found in the directory.",
    convertSuccess: (file) => `✅ Converted image: ${file}`,
    convertError: (file) => `❌ Error converting ${file}:`,
    confirmExitMessage: "Do you want to exit or run again?",
    choicesExit: ["Exit", "Run again"],
    inputDirMessage: "📝 Enter the full directory path with images:",
    convertingToJPG: (file) => `🔄 Converting ${file} to JPG...`,
    conversionToJPGDone: (file) => `✅ Conversion to JPG completed: ${file}`,
    conversionToJPGError: (err) => `❌ Error converting HEIC to JPG: ${err}`,
    runningAutoMode: (dir) => `🚀 Running in auto mode at: ${dir}`,
    runningInputMode: (dir) => `🚀 Running in input mode with path: ${dir}`,
    createdOutputDir: (dir) =>
      `📁 Output directory didn't exist. Created: ${dir}`,
    conversionComplete: "🎉 Conversion completed successfully.",
    helpDescription: "Image converter to WebP from the terminal",
    helpHelpOption: "Display help for command",
    helpInput: "Automatically converts a specific folder",
    helpOutput: "Custom output path for converted images",
    helpAuto: "Automatically convert current directory without menu",
    helpAbout: "Show author and project info",
    helpEs: "Set interface language to Spanish",
    helpVersion: "Output the version number",
    selectedDir: (path) => `📂 Selected directory: ${path}\n`,
    license: "License: ",
  },
  es: {
    welcome: "\n✨ Webpify - Conversor de Imágenes a WebP ✨\n",
    bye: "👋 ¡Hasta la próxima! 👋\n",
    errorInvalidPath: (path) => `❌ La ruta no es válida: ${path}`,
    processingImages: (count) => `🔄 Procesando ${count} imágenes...`,
    imagesSavedIn: (dir) => `📤 Imágenes convertidas se guardarán en: ${dir}\n`,
    noImagesFound: "⚠️ No se encontraron imágenes PNG o JPG en el directorio.",
    convertSuccess: (file) => `✅ Imagen convertida: ${file}`,
    convertError: (file) => `❌ Error al convertir ${file}:`,
    confirmExitMessage: "¿Deseas salir o ejecutar el programa de nuevo?",
    choicesExit: ["Salir", "Ejecutar de nuevo"],
    inputDirMessage: "📝 Ingresa la ruta completa del directorio con imágenes:",
    convertingToJPG: (file) => `🔄 Convirtiendo ${file} a JPG...`,
    conversionToJPGDone: (file) => `✅ Conversión a JPG completada: ${file}`,
    conversionToJPGError: (err) => `❌ Error al convertir HEIC a JPG: ${err}`,
    runningAutoMode: (dir) => `🚀 Ejecutando en modo automático en: ${dir}`,
    runningInputMode: (dir) => `🚀 Ejecutando en modo input con ruta: ${dir}`,
    createdOutputDir: (dir) =>
      `📁 El directorio de salida no existía. Se ha creado: ${dir}`,
    conversionComplete: "🎉 Conversión completada con éxito.",
    helpDescription: "Conversor de imágenes a WebP desde la terminal",
    helpHelpOption: "Mostrar ayuda para el comando",
    helpInput: "Convierte automáticamente una carpeta específica",
    helpOutput: "Ruta de salida personalizada para las imágenes convertidas",
    helpAuto: "Convierte automáticamente el directorio actual sin menú",
    helpAbout: "Muestra información sobre el autor y el proyecto",
    helpEs: "Cambiar idioma a español",
    helpVersion: "Mostrar el número de versión",
    selectedDir: (path) => `📂 Directorio seleccionado: ${path}\n`,
    license: "Licencia: ",
  },
};

let currentLocale = locales.en;

export function setLocale(lang) {
  if (locales[lang]) {
    currentLocale = locales[lang];
  } else {
    currentLocale = locales.en;
  }
}

export function t(key, ...args) {
  const entry = currentLocale[key];
  if (typeof entry === "function") {
    return entry(...args);
  }
  return entry || "";
}
