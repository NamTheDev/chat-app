import React from 'react';
import styles from './ModelSelector.module.css';
import { useChat } from '../context/ChatContext';

const models = [
    'gemma2-9b-it',
    // ... other models
    'mixtral-8x7b-32768',
];

const ModelSelector = () => {
    const { selectedModel, setSelectedModel } = useChat();

    const handleChange = (event