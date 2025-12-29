import dotenv from 'dotenv';
dotenv.config();
import { GoogleGenAI } from "@google/genai";
const apiKey=process.env.API_KEY;
if (!apiKey) {
  throw new Error("API_KEY is missing. Check your .env file.");
}
// console.log(apiKey)
const ai = new GoogleGenAI({ apiKey });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
        {
            role:'user',
            parts:[{text: "What is my name?"}]
        },
        {
            role:'model',
            parts:[{text:"As an AI, I don't have access to the personal information"}]
        },
        {
            role:'user',
            parts:[{text:"My name is Rahul Singh"}]
        },
        {
            role:'model',
            parts:[{text:"Thank you for sharing your name, Rahul. It's nice to meet you! How can I help you today?"}]
        },
        {
            role:'user',
            parts:[{text:"Now tell me again what is my name and what do you think of me?"}]
        }
    ],
  });
  console.log(response.text);
}

await main();