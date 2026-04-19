import { NextResponse } from 'next/server';
import { getData, saveData } from '@/lib/db';

export async function GET() {
  try {
    const data = getData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    saveData(data);
    return NextResponse.json({ message: 'Success' });
  } catch (error) {
    return NextResponse.json({ error: 'Save failed' }, { status: 500 });
  }
}
