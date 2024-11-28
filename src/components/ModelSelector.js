import React from 'react';
import styles from './ModelSelector.module.css';
import { useChat } from '../context/ChatContext';

const models = [
    'gemma2-9b-it',
    'gemma-7b-it',
    'llama3-groq-70b-8192-tool-use-preview',
    'llama3-groq-8b-8192-tool-use-preview',
    'llama-3.1-70b-versatile',
    'llama-3.1-70b-specdec',
    'llama-3.1-8b-instant',
    'llama-3.2-1b-preview',
    'llama-3.2-3b-preview',
    'llama-3.2-11b-vision-preview',
    'llama-3.2-90b-vision-preview',
    'llama-guard-3-8b',
    'llama3-70b-8192',
    'llama3-8b-8192',
    'mixtral-8x7b-32768',
];

const ModelSelector = () => {
    const { selectedModel, setSelectedModel } = useChat();

    const handleChange = (event) => {
        setSelectedModel(event.target.value);
    };

    return (
        <div className={styles.modelSelector}>
            <label htmlFor="model-select" className={styles.label}>
                Select Model:
            </label>
            <select
                id="model-select"
                value={selectedModel}
                onChange={handleChange}
                className={styles.select}
            >
                {models.map((model) => (
                    <option key={model} value={model}>
                        {model}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ModelSelector;
