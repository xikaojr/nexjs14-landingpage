'use server';

import { sql } from '@vercel/postgres';

export async function saveLead({
  name,
  email,
  phoneNumber,
  about,
}: {
  name: string;
  email: string;
  phoneNumber: string;
  about: string;
}) {
  try {
    await sql`INSERT INTO Leads (name, email, phoneNumber, about) VALUES (${name}, ${email}, ${phoneNumber}, ${about})`;
  } catch (error) {
    console.log(error);
  }
}
