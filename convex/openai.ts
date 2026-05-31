import { action } from "./_generated/server";
import { v } from "convex/values";
import { EdgeTTS } from "@andresaya/edge-tts";

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
// import { action } from "./_generated/server";
// import { v } from "convex/values";
// import OpenAI from "openai";
// import { SpeechCreateParams } from "openai/resources/audio/speech.mjs";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export const generateAudioAction = action({
//   args: { input: v.string(), voice: v.string() },
//   handler: async (_, { voice, input }) => {
//     const mp3 = await openai.audio.speech.create({
//       model: "gpt-4o-mini-tts",
//       voice: voice as SpeechCreateParams["voice"],
//       input: input,
//       instructions: "Speak in a cheerful and positive tone.",
//     });

//     const buffer = await mp3.arrayBuffer();
//     return buffer;
//   },
// });
