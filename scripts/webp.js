import sharp from "sharp";
import { readdir, unlink, stat } from "node:fs/promises";
import { extname, join } from 'path'
import { redBright, greenBright, cyanBright, yellowBright } from 'ansis';
const imagesDir = './public/images';

async function getFileSize(filePath) {
    try {
        const stats = await stat(filePath);
        return stats.size;
    } catch (error) {
        console.error(red(`Error getting size of ${filePath}: ${error}`))
        return -1;
    }
}



async function convertToWebp(inputFile, outputFile) {
    try {
        const inputFileSize = await getFileSize(inputFile);
        await sharp(inputFile).toFormat('webp').toFile(outputFile)
        const outputFileSize = await getFileSize(outputFile);
        console.log(greenBright(`✅ Converted ${inputFile} to ${outputFile}`));
        console.info(cyanBright(`🚀 Size reduction: ${((1 - outputFileSize / inputFileSize) * 100).toFixed(2)}%`));
    } catch (error) {
        console.error(redBright(`❎ Error converting ${inputFile}: ${error}`));
    }
}

async function deleteOriginalFile(filePath) {
    try {
        await unlink(filePath);
        console.log(yellowBright(`🗑️ Deleted original file ${filePath}`));
    } catch (error) {
        console.error(redBright(`❎ Error deleting file ${filePath}: ${error}`));
    }
}


async function processImages() {
    try {
        const files = await readdir(imagesDir);
        const supportedFormats = ['.jpg', '.jpeg', '.png'];

        await Promise.all(files.map(async (file) => {
            const fileExtension = extname(file).toLowerCase();
            if (supportedFormats.includes(fileExtension)) {
                const inputFilePath = join(imagesDir, file);
                const outputFilePath = inputFilePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

                await convertToWebp(inputFilePath, outputFilePath);
                await deleteOriginalFile(inputFilePath)
            }
        }));
    } catch (error) {
        console.error(redBright(`❎ Error processing images:${error}`));
    }
}
processImages()