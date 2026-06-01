import { action } from "./_generated/server";
import { v } from "convex/values";
import { EdgeTTS } from "@andresaya/edge-tts";
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export const generateAudioAction = action({
  args: {
    input: v.string(),
    voice: v.string(),
  },

  handler: async (_, { input, voice }) => {
    const tts = new EdgeTTS();

    // await tts.synthesize(input, voice, {
    await tts.synthesize(input, "en-IN-PrabhatNeural", {
      rate: "0%",
      pitch: "0Hz",
      volume: "0%",
    });

    const audioBuffer = await tts.toRaw();

    return audioBuffer;
  },
});

export const generateThumbnailAction = action({
  args: { prompt: v.string() },
  handler: async (_, { prompt }) => {
    const response = await fetch("/api/generate-thumbnail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    });
    if (!(response.ok || [201, 200].includes(response.status))) {
      throw new Error("Error generating thumbnail");
    }
    return response;
  },
});
