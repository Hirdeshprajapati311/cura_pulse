const sdk = require('node-appwrite');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });

const client = new sdk.Client();

// Debug Configuration
console.log('--- CONFIG CHECK ---');
console.log('Endpoint:', process.env.NEXT_PUBLIC_ENDPOINT);
console.log('Project:', process.env.APPWRITE_PROJECT_ID);
console.log('API Key Length:', process.env.APPWRITE_API_KEY ? process.env.APPWRITE_API_KEY.length : 'MISSING');
console.log('--------------------');

client
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

const users = new sdk.Users(client);

async function testCreate() {
    try {
        console.log('Attempting to create a test user...');
        // Create a random test user
        const result = await users.create(
            sdk.ID.unique(),
            `test-${Date.now()}@example.com`, 
            undefined, 
            undefined, 
            'Test User'
        );
        console.log('SUCCESS! User created:', result.$id);
        // Optional: delete immediately
        // await users.delete(result.$id);
    } catch (error) {
        console.error('FAILED TO CREATE USER');
        console.error('Error Code:', error.code);
        console.error('Error Message:', error.message);
        console.error('Error Type:', error.type);
    }
}

testCreate();
