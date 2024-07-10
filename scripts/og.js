import { Blog } from '../src/config/index.js'
import { readFile, writeFile } from "node:fs/promises";
import { html } from "satori-html";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import path from 'node:path';
import { existsSync } from 'node:fs';
import { greenBright, yellowBright } from 'ansis';

const basePath = './public'; // 基础路径
async function generateBlogOGImage() {
    // related issue: https://github.com/natemoo-re/ultrahtml/issues/66
    for (const blog of Blog) {
        const filePath = path.join(basePath, blog.background);
        if (!existsSync(filePath)) {
            const htmlTemplate = html(
                `<div tw="p-4 flex flex-col bg-white w-full h-full justify-center pl-24">
                            <div tw="text-zinc-700 text-5xl">David Dong</div>
                            <div tw="text-zinc-700 text-4xl mt-8">${blog.name}</div>
                            <div tw="text-zinc-500 text-2xl mt-1">${blog.time} · ${blog.description}</div>
                </div>`
            )
            const svg = await satori(htmlTemplate, {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: "RobotoMono",
                        data: await readFile("./public/RobotoMono-Regular.ttf"),
                        weight: 400,
                        style: "normal",
                    },
                ],
            });
            const resvg = new Resvg(svg, {
                background: "rgba(0, 0, 0)",
            });
            const pngData = resvg.render();
            const pngBuffer = pngData.asPng();
            const filePathWithoutExtension = filePath.replace(/\.[^/.]+$/, "");
            await writeFile(`${filePathWithoutExtension}.png`, pngBuffer)
            console.log(greenBright(`🚀 ${blog.name}'s OG Image is generate! `));
        } else {
            console.log(yellowBright(`✅ ${blog.name}'s OG Image is already exist! `));
        }
    }
}

await generateBlogOGImage()