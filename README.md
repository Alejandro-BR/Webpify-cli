# Webpify

**Webpify** is a terminal tool written in Node.js that converts your PNG, JPG, HEIC, and HEIF images to **WebP**, a modern format that reduces file size while preserving visual quality — ideal for web performance.

[![npm version](https://img.shields.io/npm/v/webpify-cli)](https://www.npmjs.com/package/webpify-cli)
[![npm downloads](https://img.shields.io/npm/dt/webpify-cli)](https://www.npmjs.com/package/webpify-cli)
[![license](https://img.shields.io/npm/l/webpify-cli)](https://github.com/Alejandro-BR/Webpify-cli/blob/main/LICENCE)


## ⭐ Features

- **Fast and efficient conversion** of PNG and JPG images to WebP.
- **Support for HEIC and HEIF formats**, converted first to JPG and then to WebP.
- **Easy to use** via the command line.
- **Multi-language support:** Full support for English and Spanish.
- **Input and output path control:** Define input/output folders directly from the CLI using flags.
- **Command-line help and version display:** Use `--help` to see available options and `--version` to check the current version of the tool.
- **Automatic mode** to convert images in the current terminal directory using `--auto`.
- Display project and author information using `--about`.
- Improved CLI experience: Clear and intuitive commands with flags like `--input`, `--output`, `--es`, `--auto`, etc.
- **Image optimization** to improve the performance of your websites.

## 👁️ Preview

![Home](/doc/img/img.png)

## 📷 Visual Comparison

Here’s a visual example showing the impact of Webpify using the [Sharp](https://github.com/lovell/sharp) library:

<table>
  <tr>
    <th>Original (JPG)</th>
    <th>Converted (WebP)</th>
  </tr>
  <tr>
    <td><img src="./doc/img/demo.jpg" width="300" alt="Original JPG"></td>
    <td><img src="./doc/img/demo.webp" width="300" alt="WebP version"></td>
  </tr>
  <tr>
    <td><b>Size:</b> 465 KB</td>
    <td><b>Size:</b> 200 KB</td>
  </tr>
</table>

WebP reduces image size by up to 70% without noticeable quality loss, improving loading speeds for your web projects.



## 💻 Installation


To install Webpify globally on your system, run the following command:


```bash
npm i -g webpify-cli
```

This will install Webpify globally, allowing you to use it from any terminal directory by simply typing:


```bash
webpify
```

If you prefer not to install it globally, you can also run it using npx:


```bash
npx webpify-cli
```

## 🛠️ Usage

You can use **Webpify** in two ways: via an **interactive mode** (without any flags) or through **command-line options**.

### Interactive Mode (no flags)

Simply run the command without any flags and Webpify will guide you step-by-step through an interactive menu:

```bash
webpify
```

---

### Commands and Options

- `--input "<path>"`  
  Automatically converts all images in the specified folder.  
  ```bash
  webpify --input "path/to/images"
  ```

- `--output "<path>"`  
  Sets a custom folder to save the converted images.  
  Can be combined with:
  - `--input`  
  - `--auto`  
  - **Interactive mode**
  ```bash
  webpify --input "path/to/images" --output "path/to/converted"
  webpify --auto --output "path/to/webp"
  webpify --output "path/to/output"
  ```

- `--auto`  
  Automatically converts all images in the current working directory without showing the menu.  
  Example:
  ```bash
  webpify --auto
  ```

- `--es`  
  Switches the interface language to Spanish.  
  **Can be used with any other flag**:
  ```bash
  webpify --es
  ```

- `--about`  
  Displays author and project information:
  ```bash
  webpify --about
  ```

- `--version` or `-V`  
  Shows the current version of Webpify:
  ```bash
  webpify --version
  ```

- `--help` or `-h`  
  Displays help and available commands:
  ```bash
  webpify --help
  ```


ℹ️ **Note:** If your file paths contain spaces, wrap them in double quotes (`" "`).


## 📁 Supported Formats

| Input Format | Output Format      |
|--------------|--------------------|
| PNG          | WebP               |
| JPG / JPEG   | WebP               |
| HEIC         | JPG (intermediate) → WebP |
| HEIF         | JPG (intermediate) → WebP |


## 🐳 Docker

Webpify is also available as a Docker image for automated workflows and CI/CD pipelines.

![Docker Version](https://img.shields.io/docker/v/alejandrobr/webpify/latest)
![Docker Pulls](https://img.shields.io/docker/pulls/alejandrobr/webpify)
![Docker Stars](https://img.shields.io/docker/stars/alejandrobr/webpify)

```bash
docker pull alejandrobr/webpify:latest
```

> [!NOTE]
> Interactive mode is not supported in Docker. Use `--auto` or `--input` instead.

- [Docker Hub](https://hub.docker.com/r/alejandrobr/webpify)
- [GitHub - Webpify Docker](https://github.com/Alejandro-BR/Webpify-docker)

## 📚 Other Languages

- [Español (Spanish)](https://github.com/Alejandro-BR/Webpify-cli/blob/main/doc/README.es.md)

## 🙌 Author


[Alejandro Barrionuevo Rosado](https://github.com/Alejandro-BR)

MIT License – © 2025-2026
