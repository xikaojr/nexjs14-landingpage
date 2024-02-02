import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Leads ( Name varchar(255), Email varchar(255), PhoneNumber varchar(25), About varchar(255) )`;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
