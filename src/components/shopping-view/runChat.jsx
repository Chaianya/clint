import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = "AIzaSyDl-yZwk8Ca-xsnjn0yiRl6y682sZQ1CbY"; // Use your actual API key securely
  
  async function runChat(prompt) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    // Enhanced context to position the AI as a professional interior designer
    const context = `
      You are a highly skilled and professional interior designer with extensive experience in creating beautiful and functional spaces. 
      Your task is to provide expert advice on interior design, including color schemes, furniture selection, space planning, and decor.
      Please respond to the following question related to interior design as if you were a professional.
    `;
    const fullPrompt = `${context} ${prompt}`;
  
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });
  
    const result = await chat.sendMessage(fullPrompt);
    const response = result.response;
    return response.text(); // Ensure to return the response text
  }
  
  export default runChat;
  