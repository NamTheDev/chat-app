import { Groq } from '@groq/client'; // Assuming this is the correct import path

const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;
const groq = new Groq(GROQ_API_KEY);

export default groq;
