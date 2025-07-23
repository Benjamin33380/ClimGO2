const https = require('https');
const http = require('http');

const testUrls = [
  'http://localhost:3000/admin/login',
  'https://climgo.fr/admin/login',
  'http://localhost:3000/_next/static/chunks/main-app-6cb4d4205dbe6682.js',
  'https://climgo.fr/_next/static/chunks/main-app-6cb4d4205dbe6682.js'
];

async function testUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, (res) => {
      console.log(`✅ ${url} - Status: ${res.statusCode}`);
      resolve(true);
    }).on('error', (err) => {
      console.log(`❌ ${url} - Error: ${err.message}`);
      resolve(false);
    });
  });
}

async function runTests() {
  console.log('🔍 Test d\'accès aux ressources...\n');
  
  for (const url of testUrls) {
    await testUrl(url);
  }
  
  console.log('\n📋 Recommandations :');
  console.log('1. Désactivez temporairement AdBlock/uBlock');
  console.log('2. Testez en navigation privée');
  console.log('3. Ajoutez climgo.fr aux exceptions de votre bloqueur');
  console.log('4. Videz le cache du navigateur');
}

runTests(); 