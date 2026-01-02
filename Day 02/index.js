import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

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