import { prisma } from "../client"

export const createUser = async (user: User) => {
    try {
        // await prisma.$connect()
        const newUser = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                username: user.username || '',
                clerkId: user.clerkId,
                imageUrl: user.imageUrl,
                last_name: user.last_name,
                first_name: user.first_name
            }
        })
        return newUser; // Return the created user object
    } catch (e) {
        console.error('Error creating user:', e);
        throw e; // Re-throw the error after logging it
    } finally {
        await prisma.$disconnect(); // Properly disconnect the Prisma client
    }
}