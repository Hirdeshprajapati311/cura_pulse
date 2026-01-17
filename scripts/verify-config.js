const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '../.env.local');
console.log('--- ENV DIAGNOSTIC ---');
console.log('Reading file:', envPath);

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    
    // Manual parse to show what's physically in the file
    const lines = envContent.split(/\r?\n/);
    lines.forEach((line, i) => {
        const trimmed = line.trim();
        if (trimmed.startsWith('APPWRITE_PROJECT_ID')) {
             console.log(`Line ${i + 1}: ${trimmed}`);
        }
        if (trimmed.startsWith('APPWRITE_API_KEY')) {
            const parts = trimmed.split('=');
            if (parts.length > 1) {
                const key = parts[1].trim();
                const masked = key.substring(0, 5) + '...' + key.substring(key.length - 5);
                console.log(`Line ${i + 1}: APPWRITE_API_KEY=${masked} (Length: ${key.length})`);
            } else {
                console.log(`Line ${i + 1}: APPWRITE_API_KEY is malformed`);
            }
        }
    });

} catch (err) {
    console.error('Error reading .env.local:', err.message);
}
console.log('----------------------');
