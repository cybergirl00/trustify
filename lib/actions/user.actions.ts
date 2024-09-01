'use server'
import { client } from "../client"

export const createUser = async (user: User) => {
    try {
        const newUser = await client.user.create({
            data: {
              name: user.name,
              email: user.email,
              clerkId: user.clerkId,
              username: user.username || '',
              imageUrl: user.imageUrl || '',
              first_name: user.first_name || '',
              last_name: user.last_name || '',
              // phone_number: user.phone_number || '',
              // accountNumber: user.accountNumber || '',
              // balance: user.balance || 0,  // Handle balance correctly
            }
          });
                     return JSON.parse(JSON.stringify(newUser));          

    } catch (error) {
        // todo add toast
        console.error('Error creating user:', error);
        throw error;
    }
}