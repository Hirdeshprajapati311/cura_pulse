
const sdk = require("node-appwrite");
const dotEnv = require("dotenv");

dotEnv.config({ path: ".env.local" });

const client = new sdk.Client();

// Use environment variables directly to avoid import issues with TS files
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;
const PROJECT_ID = process.env.APPWRITE_PROJECT_ID;
const API_KEY = process.env.APPWRITE_API_KEY;
const DATABASE_ID = process.env.DATABASE_ID;
const APPOINTMENT_COLLECTION_ID = process.env.APPOINTMENT_COLLECTION_ID;

console.log("Config:", { ENDPOINT, PROJECT_ID, DATABASE_ID, APPOINTMENT_COLLECTION_ID });

client.setEndpoint(ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);

const databases = new sdk.Databases(client);

async function checkAppointments() {
    try {
        console.log("Fetching appointments...");
        const response = await databases.listDocuments(
            DATABASE_ID,
            APPOINTMENT_COLLECTION_ID,
            [sdk.Query.limit(5)] // Fetch top 5
        );

        console.log(`Found ${response.total} appointments.`);
        
        response.documents.forEach((doc, index) => {
            console.log(`\n--- Appointment ${index + 1} ---`);
            console.log("ID:", doc.$id);
            console.log("Patient Field Type:", typeof doc.patient);
            console.log("Patient Value:", JSON.stringify(doc.patient, null, 2));
            
            if (doc.patient && typeof doc.patient === 'object') {
                console.log("Patient Name:", doc.patient.name);
            } else {
                console.log("Patient is not an expanded object.");
            }
        });

    } catch (error) {
        console.error("Error fetching appointments:", error);
    }
}

checkAppointments();
