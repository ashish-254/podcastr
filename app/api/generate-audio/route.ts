import { NextRequest, NextResponse } from "next/server";
import { EdgeTTS } from "@andresaya/edge-tts";

export async function POST(req: NextRequest) {
  try {
    const { input, voice } = await req.json();

    if (!input) {
      return NextResponse.json(
        { error: "Input text is required" },
        { status: 400 },
      );
    }

    const tts = new EdgeTTS();

    await tts.synthesize(input, voice || "en-US-JennyNeural");

    const raw = tts.toRaw();

    const audioBuffer = Buffer.from(tts.toRaw(), "base64");

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": "inline; filename=speech.mp3",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("TTS Error:", error);

    return NextResponse.json(
      {
        error: "Failed to generate audio",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}