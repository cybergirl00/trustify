'use server'
import { client } from "../client"

export const createUser = async (user: User) => {
    try {
        const createdUser = await client.user.create({
            data: {
              name: user.name,
              email: user.email,
              clerkId: user.clerkId,
              username: user.username || undefined,
              imageUrl: user.imageUrl || undefined,
              first_name: user.first_name || undefined,
              last_name: user.last_name || undefined,
              phone_number: user.phone_number || undefined,
              accountNumber: user.accountNumber || undefined,
              balance: user.balance !== undefined ? user.balance : undefined,  // Handle balance correctly
              bankName: user.bankName || undefined,
            }
          });
          return createdUser;          

    } catch (error) {
        // todo add toast
        console.log(error)
    }
}