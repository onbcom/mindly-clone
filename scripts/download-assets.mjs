import { writeFile, mkdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const assets = [
  // Favicon
  { url: 'https://framerusercontent.com/images/9r8xooMXDzITxBQYZTXEogDs98.svg', path: 'seo/favicon.svg' },
  // OG Image
  { url: 'https://framerusercontent.com/images/7HruNzVsoEdDx19fe1vUd6YAVMs.png', path: 'seo/og-image.png' },
  // Nav logo
  { url: 'https://framerusercontent.com/images/VT9XchCjHXRPw0H08BPtEicHVVs.svg', path: 'images/nav-logo.svg' },
  // Arrow icon (orange button)
  { url: 'https://framerusercontent.com/images/U0c022TYy3iR6YjbwbyxOaDRsk.svg', path: 'images/arrow-right.svg' },
  // Student headshots
  { url: 'https://framerusercontent.com/images/GvIIYiCvs1fSYrsqT9kkYqRv4Y.jpg', path: 'images/student-1.jpg' },
  { url: 'https://framerusercontent.com/images/LS4ISV3lMw5erPxQJs6QzAYUmU.jpg', path: 'images/student-2.jpg' },
  { url: 'https://framerusercontent.com/images/km3kZvwQj1ex1UnSfYsIR0bRQ.png', path: 'images/student-3.png' },
  { url: 'https://framerusercontent.com/images/fVdbJJ2MWbfO3uSvWyvr0pmMb0M.png', path: 'images/student-4.png' },
  // Hero background texture
  { url: 'https://framerusercontent.com/images/GGNg8KoV9Iwu1Z89UqqLzdQWx0.png', path: 'images/hero-bg-texture.png' },
  // Hero grid
  { url: 'https://framerusercontent.com/images/I5BmrodulLElK3MtIcR7Z5YD8bI.svg', path: 'images/hero-grid.svg' },
  // Card icons
  { url: 'https://framerusercontent.com/images/xAmC1X2qRkQnxB0EimoIk0x3A.svg', path: 'images/icon-prompt-library.svg' },
  { url: 'https://framerusercontent.com/images/A4bseyvNz1Cnuy5avzZIHnklUso.svg', path: 'images/icon-advanced-methods.svg' },
  { url: 'https://framerusercontent.com/images/0bzchfERxFoGInLFw778Fb5RW0.svg', path: 'images/icon-strategic-output.svg' },
  { url: 'https://framerusercontent.com/images/sAYaY4Wf6yTb11YoLPWYicX8BzA.svg', path: 'images/icon-card-5.svg' },
  { url: 'https://framerusercontent.com/images/JJNRfHZe6rUIX51qheRju0wEA8.svg', path: 'images/icon-card-6.svg' },
  // Marquee role icons
  { url: 'https://framerusercontent.com/images/woxoSz29mBOKNIqopNqDkmkIw.png', path: 'images/role-icon-1.png' },
  { url: 'https://framerusercontent.com/images/hs9Bda1btLFHpN17PhTD4ol3ISw.png', path: 'images/role-icon-2.png' },
  { url: 'https://framerusercontent.com/images/sSgNRhD7IXgxDVcxm64nm0flm4U.png', path: 'images/role-icon-3.png' },
  // Overview icons
  { url: 'https://framerusercontent.com/images/ElRlMCLGjqX1q3OFwuQTJ2HpsQ.svg', path: 'images/icon-overview-1.svg' },
  { url: 'https://framerusercontent.com/images/9S25YVWy1OmIexcbeYdBHQo4w3g.svg', path: 'images/icon-overview-2.svg' },
  { url: 'https://framerusercontent.com/images/1MauLwmR6iIXjyzXmZQhtMk4O0.svg', path: 'images/icon-overview-3.svg' },
  // Instructor headshot
  { url: 'https://framerusercontent.com/images/f5v4aHZXRv2WbZg1HXlSljMDoc.png', path: 'images/instructor.png' },
  // Company logo
  { url: 'https://framerusercontent.com/images/BtfMCqbG1GWtBBbWDm9pfxeIE.svg', path: 'images/company-logo.svg' },
  // Background noise layer
  { url: 'https://framerusercontent.com/images/rt3hIAGM2E1e1YlaAI6zWsHtbk.png', path: 'images/bg-noise.png' },
  // Hero background image (dark)
  { url: 'https://framerusercontent.com/images/Z2DiO6dZ026J28WbfMPgC380w.png', path: 'images/hero-bg-image.png' },
  // Globe/community SVG
  { url: 'https://framerusercontent.com/images/uF2M5DGlba8g1a4tyRQ7KFRlgY4.svg', path: 'images/globe.svg' },
];

async function downloadFile(url, filePath) {
  try {
    const fullPath = join(publicDir, filePath);
    await mkdir(dirname(fullPath), { recursive: true });
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(fullPath, buffer);
    console.log(`OK: ${filePath} (${buffer.length} bytes)`);
  } catch (err) {
    console.error(`FAIL: ${filePath} - ${err.message}`);
  }
}

async function main() {
  console.log(`Downloading ${assets.length} assets...`);
  // Batch 4 at a time
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4);
    await Promise.all(batch.map(a => downloadFile(a.url, a.path)));
  }
  console.log('Done!');
}

main();
