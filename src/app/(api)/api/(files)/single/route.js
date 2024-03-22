import { getAffiliate, createAffiliate, updateAffiliate, deleteAffiliate} from "@/lib/data.service";
import { deleteFile, fileHandler } from "@/lib/fileHandler";
import { NextResponse } from "next/server";


// Upload Single File
export async function POST(request) {

    const data = await request.formData();
    const file = data.get('file');
    const folder = "single";
    const fileName = ''

    if(!file)
    {
        return NextResponse.json({'ok': false, 'message': 'Missing file or title'});
    }
    
    let handler = await fileHandler({file, folder, fileName});

    return NextResponse.json({'ok': true, 'message': 'File uploaded'});

    
}