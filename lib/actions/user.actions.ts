// creating user to the database
'use server'

import { client } from "../client"

export const createUser = async (user: User) => {
    try {
        const createdUser = client.user.create({
            data: {
                name: user.name,
                email: user.email,
                clerkId: user.clerkId,
                username: user.username,
                imageUrl: user.imageUrl,
                first_name: user.first_name,
                last_name: user.last_name,
            }
        })

        return JSON.parse(JSON.stringify(createdUser))

    } catch (error) {
        // todo add toast
        console.log(error)
    }
}