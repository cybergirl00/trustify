import Link from "next/link"
import { Bell, Settings} from 'lucide-react'
import { UserButton, useUser } from "@clerk/nextjs"

const Navbar = () => {
    const { user } = useUser();
  return (
    <div className="flex justify-between p-4 items-center ">
        <div >
            <h1 className='text-3xl font-extrabold trunicate'>Trustify.</h1>
        </div>

        <div className="">
            <ul className='flex gap-3 text-sm'>
                <li>Overview</li>
                <li>Transaction</li>
                <li>Analytics</li>
            </ul>
        </div>

        <div className="flex gap-7 items-center">
            <div className="flex gap-3">
            <Link href='/settings'>
            <Settings />
            </Link>
            <Link href='/notifications'>
            <Bell />
            </Link>
            </div>
            {/* user */}
            <UserButton />
            <div className="">
                <h1 className='font-bold text-lg'>{user?.fullName}</h1>
                <h2 className='font-sm text-gray-300 trunicate'>{user?.emailAddresses[0]?.emailAddress}</h2>
            </div>
        </div>


    </div>
  )
}

export default Navbar