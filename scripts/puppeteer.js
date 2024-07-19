import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

const browser = await puppeteer.launch({
    headless: true, // 设置为false以便观察浏览器动作，调试时很有用
    args: ['--disable-web-security']
});

const page = await browser.newPage();


await page.setViewport({ width: 1280, height: 800 });
const client = await page.target().createCDPSession();
const downloadPath = "./public";
await client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: downloadPath
});

await page.goto("https://typst.app/project/rIWFtNvpmsgHgh18iqpk2a");

try {
    // 等待带有aria-label="Quick export PDF"的按钮出现，最多等待10秒钟
    await page.waitForSelector('button[aria-label="Quick export PDF"]', { timeout: 20000 });
    console.log('页面加载完毕')
    // 找到并点击带有aria-label="Quick export PDF"的按钮
    const quickExportPDFButton = await page.$('button[aria-label="Quick export PDF"]');
    await quickExportPDFButton.click();

    // 等待下载完成
    await page.waitForTimeout(10000); // 根据实际情况调整时间
    console.log('文件已保存到:', downloadPath);
} catch (error) {
    console.error('操作超时或发生错误:', error);
}

await browser.close();
