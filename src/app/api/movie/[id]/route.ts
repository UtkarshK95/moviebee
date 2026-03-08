import { NextResponse } from "next/server";
import { fetchMovieDetail } from "@/lib/omdb";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const movie = await fetchMovieDetail(id);
    return NextResponse.json(movie);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    const isNotFound = message.toLowerCase().includes("not found");
    return NextResponse.json({ error: message }, { status: isNotFound ? 404 : 500 });
  }
}
