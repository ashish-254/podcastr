import { NextRequest, NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HUGGING_FACE_TOKEN!);

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const image = await client.textToImage({
      provider: "hf-inference",
      model: "black-forest-labs/FLUX.1-schnell",
      inputs: prompt,
    });

    const blob = image as unknown as Blob;

    const buffer = await blob.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate image" },
      { status: 500 },
    );
  }
}
