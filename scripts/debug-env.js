const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });

const output = [];
output.push(`ENDPOINT: ${process.env.NEXT_PUBLIC_ENDPOINT}`);
output.push(`PROJECT_ID: ${process.env.APPWRITE_PROJECT_ID}`);

const key = process.env.APPWRITE_API_KEY || '';
output.push(`API_KEY_LENGTH: ${key.length}`);
if (key.length > 10) {
    output.push(`API_KEY_START: ${key.substring(0, 5)}`);
    output.push(`API_KEY_END: ${key.substring(key.length - 5)}`);
} else {
    output.push(`API_KEY: ${key || 'UNDEFINED'}`);
}

// Check for hex/alphanumeric
const isClean = /^[a-zA-Z0-9]+$/.test(key);
output.push(`API_KEY_IS_CLEAN_ALPHANUM: ${isClean}`);

fs.writeFileSync(path.resolve(__dirname, 'debug-output.txt'), output.join('\n'));
console.log('Debug output written to scripts/debug-output.txt');
