
import { getSubscribers } from "@/lib/data.service";
import { NextResponse } from "next/server"

// Get Promo.
export async function GET() {

    let promos = await getSubscribers();
    
    return NextResponse.json(promos);

}

