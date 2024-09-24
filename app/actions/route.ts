'use server'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export async function getEssay(prompt: string) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    const generationConfig = {
        temperature: 1,            // Lowered to make responses more coherent
        topP: 0.1,               // Keeps diverse yet controlled outputs
        maxOutputTokens: 8192,       // Same max token length, allowing for longer responses
        responseMimeType: "text/plain", // Changed to output markdown format
    };

    // Ensure run is called and result is returned
    async function run() {
        const parts = [
            { text: prompt },  // Use the prompt as input text here
        ];

        const result = await model.generateContent({
            contents: [{ role: "user", parts }],
            generationConfig,
        });
        return result.response.text();  // Return the generated text
    }

    // Call the run function and return its result
    const generatedText = await run();
    return generatedText;  // Return the generated text from getEssay
}
