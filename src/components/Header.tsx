import { ROUTES } from "@/constants/routes"
import Link from "next/link"
import Image from "next/image";

import bg1 from "@/assets/bg1.png"

import ball1 from "@/assets/ball1.png";
import ball2 from "@/assets/ball2-removebg-preview.png";
import ball3 from "@/assets/ball3.png";

interface IHeader {
    route1: string, 
    route2: string, 
    route3: string
}

const Header = ( { route1, route2, route3 }: IHeader ) => {

    return (
        <nav className="font-semibold flex flex-row flex-wrap gap-5 bg-amber-800 justify-center p-3 font-karlaFont min-h-[6vh] h-fit">
          <Link href={ROUTES.firstRoute} className=" text-wrap flex items-center justify-center\ font-semibold hover:cursor-pointer hover:bg-amber-600 text-center min-w-24 py-1 px-2 text-white bg-amber-700">
            <div className="flex gap-2 items-center justify-center">
                {route1}
                <Image className="w-8 h-8" src={ball1} alt={route1}/>

            </div>
          </Link>
          <Link href={ROUTES.secondRoute} className=" text-wrap flex items-center justify-center\ font-semibold hover:cursor-pointer hover:bg-amber-600 text-center min-w-24 py-1 px-2 text-white bg-amber-700">
            <div className="flex gap-2 items-center justify-center">
                {route2}
                <Image className="w-8 h-8" src={ball2} alt={route2}/>

            </div>
          </Link>
          <Link href={ROUTES.thirdRoute} className=" text-wrap flex items-center justify-center\ font-semibold hover:cursor-pointer hover:bg-amber-600 text-center min-w-24 py-1 px-2 text-white bg-amber-700">
            <div className="flex gap-2 items-center justify-center">
                {route3}
                <Image className="w-8 h-8" src={ball3} alt={route3}/>

            </div>
          </Link>
          
          
        </nav>
    )
}

export default Header;