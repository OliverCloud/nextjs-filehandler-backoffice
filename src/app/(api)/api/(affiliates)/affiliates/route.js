import { getAffiliates } from "@/lib/data.service";
import { NextResponse } from "next/server";

// Get All.
export async function GET() {

    let affiliates = await getAffiliates();
    
    return NextResponse.json(affiliates);

}