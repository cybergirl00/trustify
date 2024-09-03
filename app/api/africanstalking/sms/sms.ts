import { NextRequest, NextResponse } from 'next/server';
import Africastalking from 'africastalking';

const credentials = {
    apiKey: process.env.NEXT_PUBLIC_AFRICANSTALKING_API_KEY as string,
    username: process.env.NEXT_PUBLIC_AFRICANSTALKING_USERNAME as string,
};

const africastalking = Africastalking(credentials);

export async function POST(req: NextRequest) {
    try {
        const { phone, message } = await req.json();

        const smsOptions = {
            to: [phone],
            message: message,
            from: 'Trust Bank',
        };

        const response = await africastalking.SMS.send(smsOptions);

        return NextResponse.json({ success: true, response });
    } catch (error) {
        console.error('Error sending SMS:', error);
        return NextResponse.json({ success: false, error: 'Failed to send SMS' }, { status: 500 });
    }
}
