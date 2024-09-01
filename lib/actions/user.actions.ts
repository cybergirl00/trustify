'use server'
import { client } from "../client"

export const createUser = async (user: User) => {
    try {
        const createdUser = await client.user.create({
            data: {
                name: user.name,
                email: user.email,
                clerkId: user.clerkId,
                username: user.username,
                imageUrl: user.imageUrl,
                first_name: user.first_name,
                last_name: user.last_name,
                phone_number: user.phone_number || null,  // Provide null if missing
                accountNumber: user.accountNumber || null,  // Provide null if missing
                balance: user.balance || null,
                bankName: user.bankName || '',  // Provide null if missing
            },

        }).then((response) => (
            console.log(response.clerkId)
        ))

    return JSON.parse(JSON.stringify(createdUser))

    } catch (error) {
        // todo add toast
        console.log(error)
    }
}