import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c8a784dc50788a2d6d'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
