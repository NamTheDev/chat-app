import { Groq } from 'groq-sdk'; // Assuming this is the correct import path

const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;
const groq = new Groq({ apiKey: GROQ_API_KEY, dangerouslyAllowBrowser: true });

export default groq;
