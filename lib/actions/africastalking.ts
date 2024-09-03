export const sendSms = async (phone: string, message: string) => {
    try {
        const response = await fetch('/api/africanstalking/sms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone, message }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || 'Failed to send SMS');
        }
        console.log('SMS sent successfully:', data);
    } catch (error) {
        console.error('Error sending SMS:', error);
    }
};
