const playwright = require("playwright");
const path = require("path");
const { spawn } = require("child_process");
const sharp = require("sharp");
const { readdir } = require("fs/promises");
const { extname, basename } = require("path");

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

(async () => {
  const next = path.join(__dirname, "../node_modules/.bin/next");
  console.log(next);
  const cp = spawn(next);
  await new Promise((resolve) => {
    cp.stdout.on("data", (chunk) => {
      const c = chunk.toString("utf-8");
      if (c.startsWith("ready - started server")) {
        cp.stdout.removeAllListeners();
        resolve();
      }
    });
  });
  console.log("server is ready");

  const browser = await playwright.chromium.launch();
  const fs = await readdir(path.join(__dirname, "../out/sketches"));
  for (const f of fs) {
    const ext = extname(f);
    if (ext !== ".html") {
      continue;
    }
    const b = basename(f, ext);

    const page = await browser.newPage({
      viewport: { width: 1200, height: 1200 },
      deviceScaleFactor: 2,
    });

    await page.goto(`http://0.0.0.0:3000/sketches/${b}`, { waitUntil: "load" });

    // await sleep(0);

    const image = await page
      .locator("canvas.p5Canvas")
      .screenshot({ type: "png", fullPage: false });
    const filename = path.join(__dirname, `../out/sketches/${b}.png`);
    await sharp(image).resize({ width: 1200, height: 630 }).toFile(filename);
    console.log(`write ogp: ${filename}`);
  }

  await browser.close();
  cp.kill();
})();
