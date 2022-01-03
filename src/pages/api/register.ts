import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {

    if (cachedDb) {
        return cachedDb;
    }

    const client = await MongoClient.connect(uri);

    const dbName1 = new URL(uri);
    const dbPathName = dbName1.pathname.substring(1);

    const db = client.db(dbPathName);

    cachedDb = db;

    return db;
}


export default async (request: VercelRequest, response: VercelResponse) => {
    const { developerName, skillsSelected } = request.body;

    const db = await connectToDatabase(process.env.MONGODB_URI);

    const collection = db.collection('developers');

    await collection.insertOne({
        devName: developerName,
        skills: skillsSelected,
        subscribedAt: new Date()
    })

    return response.status(201).json({ ok: true });

}