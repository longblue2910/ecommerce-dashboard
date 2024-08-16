import Collection from "@/lib/models/Collection";
import { connectToDb } from "@/lib/mongDb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDb();

    const { title, description, image } = await req.json();

    const existingCollection = await Collection.findOne({ title });

    if (existingCollection) {
      return new NextResponse("Collection already exists", { status: 400 });
    }

    if (!title || !image) {
      return new NextResponse("Title and Image are required", { status: 400 });
    }

    const newCollection = await Collection.create({
      title,
      description,
      image,
    });

    await newCollection.save();

    return NextResponse.json(newCollection, { status: 200 });
  } catch (error) {
    console.log("[collections_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
