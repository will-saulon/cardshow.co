import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    // Connect to the database
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    // Fetch sample data
    const comments = await db.collection("comments").find({}).toArray();
    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
