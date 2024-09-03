import { mutation, query } from "@/convex/_generated/server";
import { ConvexError, v } from "convex/values";

export const createUser = mutation({
    args: {
        clerkId: v.string(),
      name: v.union(v.string(), v.null()),
        email: v.string(),
        phone: v.string(),
        accountNumber: v.string(),
        bankName: v.string(),
        username: v.string(),
        first_name: v.string(),
        last_name: v.string(),
        amount: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await ctx.db.insert("users", {
            name: args.name,
            email:  args.email,
            phone: args.phone,
            accountNumber: args.accountNumber,
            bankName: args.bankName,
            username: args.username,
            clerkId: args.clerkId,
            first_name: args.first_name,
            last_name: args.last_name,
            amount: args.amount,
        })
        return user
    }
})


export const getUser = query({
    args: { clerkId: v.string()},
        handler: async (ctx, args) => {
            const user = await ctx.db.query('users')
            .filter((q) => q.eq(q.field('clerkId'), args.clerkId     
        )).unique();

        if(!user) {
            
            // throw new ConvexError("User not found")
            return { found: false, user: null };
        }
        return user;
        }

})