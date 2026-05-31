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
// import { NextRequest, NextResponse } from "next/server";
// import { EdgeTTS } from "@andresaya/edge-tts";

// export async function POST(req: NextRequest) {
//   try {
//     const { input, voice } = await req.json();

//     if (!input) {
//       return NextResponse.json(
//         { error: "Input text is required" },
//         { status: 400 },
//       );
//     }

//     const tts = new EdgeTTS();

//     await tts.synthesize(input, voice || "en-US-JennyNeural");

//     console.log("tts.toRaw().length", tts.toRaw().length);
//     console.log("tts", tts);

//     const raw = tts.toRaw();

//     console.log("typeof raw", typeof raw);
//     console.log("constructor", raw?.constructor?.name);
//     console.log("is Uint8Array", raw instanceof Uint8Array);
//     console.log("is Buffer", Buffer.isBuffer(raw));
//     console.log("length", raw.length);
//     console.log("first 16 bytes", Array.from(raw.slice(0, 16)));

//     console.log(
//       "Object.getOwnPropertyNames(Object.getPrototypeOf(tts",
//       Object.getOwnPropertyNames(Object.getPrototypeOf(tts)),
//     );

//     // const audioBuffer = Buffer.from(tts.toRaw());
//     const audioBuffer = Buffer.concat(
//       tts.audio_stream.map((chunk) => Buffer.from(chunk)),
//     );

//     return new NextResponse(audioBuffer, {
//       headers: {
//         "Content-Type": "audio/mpeg",
//         "Content-Disposition": "inline; filename=speech.mp3",
//         "Cache-Control": "no-store",
//       },
//     });
//   } catch (error) {
//     console.error("TTS Error:", error);

//     return NextResponse.json(
//       {
//         error: "Failed to generate audio",
//         details: error instanceof Error ? error.message : "Unknown error",
//       },
//       { status: 500 },
//     );
//   }
// }
