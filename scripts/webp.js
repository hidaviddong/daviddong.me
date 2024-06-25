import sharp from "sharp";
import { readdir, unlink } from "node:fs/promises";
import { extname, join } from 'path'
const imagesDir = './public/images';

async function convertToWebp(inputFile, outputFile) {
    try {
        await sharp(inputFile).toFormat('webp').toFile(outputFile)
        console.log(`Converted ${inputFile} to ${outputFile}`);
    } catch (error) {
        console.error(`Error converting ${inputFile}:`, error);
    }
}

async function deleteOriginalFile(filePath) {
    try {
        await unlink(filePath);
        console.log(`Deleted original file ${filePath}`);
    } catch (error) {
        console.error(`Error deleting file ${filePath}:`, error);
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
        console.error('Error processing images:', error);
    }
}
processImages()