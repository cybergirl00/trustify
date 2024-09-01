'use server'
import { client } from "../client"

export const createUser = async (user: User) => {
    try {
        const createdUser = await client.user.create({
            data: {
              name: user.name,
              email: user.email,
              clerkId: user.clerkId,
              ...(user.username && { username: user.username }),
              ...(user.imageUrl && { imageUrl: user.imageUrl }),
              ...(user.first_name && { first_name: user.first_name }),
              ...(user.last_name && { last_name: user.last_name }),
              ...(user.phone_number && { phone_number: user.phone_number }),
              ...(user.accountNumber && { accountNumber: user.accountNumber }),
              ...(user.balance && { balance: user.balance }),
              ...(user.bankName && { bankName: user.bankName }),
            }
          });
          return createdUser;          

    } catch (error) {
        // todo add toast
        console.log(error)
    }
}