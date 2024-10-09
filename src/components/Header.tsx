import { ROUTES } from "@/constants/routes"
import Link from "next/link"

interface IHeader {
    route1: string, 
    route2: string, 
    route3: string
}

const Header = ( { route1, route2, route3 }: IHeader ) => {

    return (
        <nav className="font-semibold flex flex-row flex-wrap gap-5 bg-amber-800 justify-center p-3 font-karlaFont min-h-[6vh] h-fit">
          <Link href={ROUTES.firstRoute} className=" text-wrap font-semibold hover:cursor-pointer hover:bg-amber-600 text-center min-w-24 py-1 px-2 text-white bg-amber-700">{route1}</Link>
          <Link href={ROUTES.secondRoute} className=" text-wrap font-semibold hover:cursor-pointer hover:bg-amber-600 text-center min-w-24 py-1 px-2 text-white bg-amber-700">{route2}</Link>
          <Link href={ROUTES.thirdRoute} className=" text-wrap font-semibold hover:cursor-pointer hover:bg-amber-600 text-center min-w-24 py-1 px-2 text-white bg-amber-700">{route3}</Link>
          
        </nav>
    )
}

export default Header;