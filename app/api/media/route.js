import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the public images path on the server
const uploadDir = path.join(process.cwd(), 'public', 'images');

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const typeQuery = searchParams.get('type'); // 'image' | 'video' | 'file'

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(uploadDir);

    const imageRegex = /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i;
    const videoRegex = /\.(mp4|webm|ogg|mov)$/i;
    const fileRegex = /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|zip|rar)$/i;

    const mediaFiles = files
      .filter(file => {
        if (typeQuery === 'image') return imageRegex.test(file);
        if (typeQuery === 'video') return videoRegex.test(file);
        if (typeQuery === 'file') return fileRegex.test(file);
        // Default: return all matching allowed
        return imageRegex.test(file) || videoRegex.test(file) || fileRegex.test(file);
      })
      .map(file => {
        let category = 'file';
        if (imageRegex.test(file)) category = 'image';
        else if (videoRegex.test(file)) category = 'video';

        return {
          name: file,
          url: `/images/${file}`,
          type: 'local',
          category
        };
      });

    // Sort by name descending (putting newer files first if they are named by timestamp)
    mediaFiles.sort((a, b) => b.name.localeCompare(a.name));

    return NextResponse.json(mediaFiles);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Strict server-side type and extension validation to prevent uploads of scripts, text files or shells
    const mimeType = file.type || '';
    const name = file.name || '';
    const extension = path.extname(name).toLowerCase();
    
    const allowedExtensions = [
      // Images
      '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico',
      // Videos
      '.mp4', '.webm', '.ogg', '.mov',
      // Documents/Files
      '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.zip', '.rar'
    ];

    const allowedMimePrefixes = ['image/', 'video/'];
    const allowedMimeTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/zip',
      'application/x-zip-compressed',
      'application/x-rar-compressed'
    ];

    const isMimeAllowed = allowedMimePrefixes.some(pref => mimeType.startsWith(pref)) || allowedMimeTypes.includes(mimeType);

    if (!allowedExtensions.includes(extension) || !isMimeAllowed) {
      return NextResponse.json({ error: 'Định dạng tập tin không được hỗ trợ hoặc không an toàn để upload!' }, { status: 400 });
    }

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Clean filename: timestamp + sanitized original name
    const timestamp = Date.now();
    const sanitizedName = file.name
      .replace(/[^a-zA-Z0-9.-]/g, '_') // Replace special chars with underscore
      .toLowerCase();
    const fileName = `${timestamp}_${sanitizedName}`;
    const filePath = path.join(uploadDir, fileName);

    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      success: true,
      name: fileName,
      url: `/images/${fileName}`,
      type: 'local'
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
