import type {NextApiHandler, NextApiResponse} from "next";
import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;