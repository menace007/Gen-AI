import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
        {
            role: 'user',
            parts: [{text: "what is my name"}]
        },
        {
            role: 'model',
            parts: [{text: "I don't know your name yet! As an AI, I don't have access to your personal identity or real-life information unless you share it with me during our conversation. If you'd like to tell me your name, I'll be happy to remember it for the rest of our chat!"}]
        },
        {
            role: 'user',
            parts: [{text: "My name is Manish Sharma"}]
        },
        {
            role: 'model',
            parts: [{text: "It’s nice to meet you, Manish Sharma! How can I help you today?"}]
        },
        {
            role: 'user',
            parts: [{text: "What is my name?"}]
        }
    ]
  });
  console.log(response.text);
}

await main();