import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject('65c8a784dc50788a2d6d'); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
