import type {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import axios from 'axios';
import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI();
export  default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const myAssistant = await openai.beta.assistants.retrieve('asst_tN6vVKkXrNn0m6g4XOsRFw0V');
            const myThread = await myAssistant
        
        } catch (error) {
            console.error('OpenAI API call failed', error);
            res.status(500).json({message: 'Error calling OpenAI API'});
        }
    }
}