
import { createReview, deleteReview, getReviews, updateReview } from "@/lib/data.service";
import { deleteFile, fileHandler } from "@/lib/fileHandler";
import { NextResponse } from "next/server"

// Get All Reviews.
export async function GET() {

    let reviews = await getReviews();
    
    return NextResponse.json(reviews);

}
