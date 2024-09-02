import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  const { email, bvn, firstname, lastname, phonenumber } = await request.json();

  try {
    const response = await axios.post(
      'https://api.flutterwave.com/v3/virtual-account-numbers',
      {
        email,
        is_permanent: true,
        bvn,
        phonenumber,
        firstname,
        lastname,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    // return NextResponse.json({ error }, { status: 500 });
  }
}
