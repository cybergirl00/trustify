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
                first_name: user.first_name,
                bankName: user?.bankName,
                accountNumber: user?.bankAccountNumber,
                balance: user?.balance

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


export const getUser = async (userId: string) => {
    try {
    const user  =   await prisma.user.findUnique({
            where: {clerkId: userId}
        })
        if (!user) {
            throw new Error('User not found');
        }

        return user.clerkId; 
    } catch (error) {
        
    }
}