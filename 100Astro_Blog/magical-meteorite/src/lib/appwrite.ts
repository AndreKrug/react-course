import { Client, Databases } from 'appwrite';

export const client = new Client();
export const databases = new Databases(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65c8a784dc50788a2d6d');