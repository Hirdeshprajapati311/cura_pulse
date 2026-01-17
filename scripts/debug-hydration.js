
const sdk = require("node-appwrite");
const dotEnv = require("dotenv");

dotEnv.config({ path: ".env.local" });

const client = new sdk.Client();

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;
const PROJECT_ID = process.env.APPWRITE_PROJECT_ID;
const API_KEY = process.env.APPWRITE_API_KEY;
const DATABASE_ID = process.env.DATABASE_ID;
const APPOINTMENT_COLLECTION_ID = process.env.APPOINTMENT_COLLECTION_ID;
const PATIENT_COLLECTION_ID = process.env.PATIENT_COLLECTION_ID;

client.setEndpoint(ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);

const databases = new sdk.Databases(client);

// Mimic the getRecentAppointmentList logic
async function testHydration() {
    try {
        console.log("Fetching appointments...");
        const response = await databases.listDocuments(
            DATABASE_ID,
            APPOINTMENT_COLLECTION_ID,
            [sdk.Query.limit(2), sdk.Query.orderDesc("$createdAt")]
        );

        console.log(`Checking ${response.documents.length} appointments for hydration...`);

        const hydratedDocs = await Promise.all(response.documents.map(async (doc) => {
             console.log(`\nChecking Doc ID: ${doc.$id}`);
             console.log(`Original Patient Field:`, doc.patient);
             
             if (typeof doc.patient === 'string') {
                 console.log(`Hydrating patient string ID: ${doc.patient}`);
                 try {
                     const patient = await databases.getDocument(
                         DATABASE_ID,
                         PATIENT_COLLECTION_ID,
                         doc.patient
                     );
                     console.log(`Hydrated! Name: ${patient.name}`);
                     return { ...doc, patient };
                 } catch (err) {
                     console.error("Hydration failed:", err.message);
                     return doc;
                 }
             } else if (typeof doc.patient === 'object' && doc.patient !== null) {
                  console.log(`Already object. Name: ${doc.patient.name}`);
                  return doc;
             }
             return doc;
        }));
        
        console.log("\n--- Final Hydrated Results Sample ---");
        hydratedDocs.forEach(doc => {
             console.log(`ID: ${doc.$id}, Patient Name: ${doc.patient?.name || 'Unknown'}`);
        });

    } catch (error) {
        console.error("Test failed:", error);
    }
}

testHydration();
