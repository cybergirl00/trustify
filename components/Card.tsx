import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const Card = (card: any) => {
    const [isOpen, setIsOpen] = useState(true)
    const eye = 'closed'
  return (
    <div className="bg-primary w-[400px] h-[200px] rounded-sm shadow-sm py-7 px-7">
       {card ? (
        <div className="flex flex-col ">
            <div className="flex justify-between items-center">
                {isOpen  === true ? <EyeOff />
                : <Eye />
                }
            <h2 className="text-white font-4xl text-extrabold flex-end">VISA</h2>
            </div>

            <div className="flex flex-col items-center justify-center pt-7">
                 <h2>●●●● ●●●● ●●●● ●123</h2>
                 <h2>CVC: ●●●</h2>
            </div>

            <div className="flex justify-between items-center mt-4">
            <h2 className='font-bold'>Rabiat Dikko</h2>
            <div className="">
            <h2 className="text-gray-300 font-light text-sm">
                Expires
            </h2>
            <span>1/24</span>
            </div>
            </div>
        </div>
       ): (
        <div className=""></div>
       )}
    </div>
  )
}

export default Card