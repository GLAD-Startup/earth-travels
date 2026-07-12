const fs = require('fs');
const https = require('https');

const code = fs.readFileSync('lib/data/packages.ts', 'utf8');
const regex = /image:\s*"([^"]+)"/g;
let match;
const urls = [];
while ((match = regex.exec(code)) !== null) {
  urls.push(match[1]);
}

console.log(`Found ${urls.length} images to check.`);

async function checkUrl(url) {
  if (url.startsWith('/')) return { url, status: 'local' };
  
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => {
      resolve({ url, status: e.message });
    });
  });
}

async function run() {
  const promises = urls.map(url => checkUrl(url));
  const results = await Promise.all(promises);
  const broken = results.filter(r => r.status !== 200 && r.status !== 'local');
  console.log(`Found ${broken.length} broken images:`);
  broken.forEach(b => console.log(b));
}

run();
