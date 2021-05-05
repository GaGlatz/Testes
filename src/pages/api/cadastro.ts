import { NowRequest, NowResponse } from "@vercel/node";
import { MongoClient, Db } from "mongodb";
import url from "url";

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async (request: NowRequest, response: NowResponse) => {
  if (request.method === "POST") {
    const { name, email } = request.body;

    const db = await connectToDatabase(process.env.MONGODB_URI);

    const collection = db.collection("users");

    await collection.insertOne({
      name,
      email,
      cadastroAt: new Date(),
    });

    return response.status(201).json({});

  } if (request.method === "GET") {
    const db = await connectToDatabase(process.env.MONGODB_URI);

    const collection = await db.collection("users");
  
    const users = await collection.find({}).toArray();
  
    return response.status(201).json({users});
  }
};
