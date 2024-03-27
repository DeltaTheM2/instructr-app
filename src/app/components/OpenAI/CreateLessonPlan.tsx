import type {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import axios from 'axios';
import OpenAI from "openai";
import {threadId} from "node:worker_threads";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI();
const assistant_id:string = 'asst_tN6vVKkXrNn0m6g4XOsRFw0V';
export  default async function CreateLessonPlan(message: string) {
            const myAssistant = await openai.beta.assistants.retrieve(assistant_id);
            const myThread = await openai.beta.threads.create();
            const newMessage = openai.beta.threads.messages.create(
                myThread.id,
                {role: 'user',content: message}
            );
            const newRun = await openai.beta.threads.create(
                myThread,
                {assistant_id: assistant_id}    
            );
            
            
    }