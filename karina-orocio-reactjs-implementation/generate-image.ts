import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generate() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: 'Professional headshot of a young Mexican female lawyer with long dark hair, wearing a professional dark suit and white shirt, smiling subtly, bright modern law office background, high quality, 8k resolution, photorealistic.',
      config: {
        imageConfig: {
          aspectRatio: "3:4",
          imageSize: "1K"
        }
      }
    });
    
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        if (!fs.existsSync('public')) {
          fs.mkdirSync('public');
        }
        fs.writeFileSync('public/headshot.jpg', Buffer.from(part.inlineData.data, 'base64'));
        console.log('Image generated successfully');
      }
    }
  } catch (e) {
    console.error(e);
  }
}
generate();
