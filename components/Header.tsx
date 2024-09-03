'use client'
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Card from "./Card";

const Header = (user: any) => {
    const ownCard = false;
    // const router = useRouter();

    // const getUser = useQuery(api.user.getUser, { clerkId: user})

    // if(!getUser) {
    //     router.push('/onboarding')
    // }
  return (
    <div 
    className="bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 h-70 w-full"
    >
        {/* Navbar */}

        <Navbar />

        {/* section */}

        <section className="p-7 flex gap-8">
            <Card  card={ownCard}/>

            <div className="flex flex-col gap-2">
                <div className="">
                    <h2 className='text-gary-300 font-sm'>Balance</h2>
                    <p className="font-bold text-xl">$2,000.79</p>
                </div>

                <div className="">
                    <h2 className='text-gary-300 font-sm'>Currency</h2>
                    <p className="font-bold text-xl">NGN/Naira</p>
                </div>

                <div className="">
                    <h2 className='text-gary-300 font-sm'>Status</h2>
                    <p className='text-green-200 font-bold'>Active</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Header