
import { fileHandler } from "@/lib/fileHandler";
import { NextResponse } from "next/server";


// Upload Single File
export async function POST(request) {

    const data = await request.formData();
    const length = data.get('length');
    const folder = "multiple";
    const fileName = '';

    for (let i = 0; i < length; i++) {

        let mfile = data.get('files_' + i);
        let handler = await fileHandler({file: mfile, folder, fileName});
        
    }

    return NextResponse.json({'ok': true, 'message': 'Mulitiple Files created'});
 
}