import Image from "next/image";
import bg2 from "@/assets/Símbolo_Japonês-ai-brush-removebg-s1z1oabg.png"
import open from "@/assets/share.png"
import Link from "next/link";

interface IData {
    id: number,
    name: string, 
    ki: string,
    race: string,
    gender: string,
}

const SimpleCard = ({id, name, ki, race, gender}: IData) => {
    return(
        <div className="relative w-[400px] h-[90px] rounded-md overflow-hidden shadow-xl flex">
            <div className="bg-gradient-to-br from-amber-500 to-red-600 p-2 w-1/6 h-full"></div>
            <div className="absolute left-[30%] top-[13%] w-1/2">
                <div className="flex justify-between w-full items-center">
                    <h1 className="z-30 text-blue-900 font-semibold text-2xl">{name}</h1>
                    <Link href={`/person/${id}`}><Image src={open} alt={`More Information about ${name}`} width={20} height={20}/></Link>
                </div>
                <div>
                    <h1 className="z-30 text-gray-400 font-semibold italic leading-none"># {id}</h1>
                    {/* <h1 className="z-30 text-orange-700 font-semibold">{ki}</h1> */}
                    <h1 className="z-30 text-orange-700 font-semibold">{race}</h1>
                    {/* <h1 className="z-30 text-orange-700 font-semibold">{gender}</h1> */}
                </div>
            </div>
            <Image className="w-[80px] h-auto left-[6%] -top-3  absolute rounded-full object-scale-down" priority={true} src={bg2} width={60} height={60} alt="Background"/>
        </div>
    )
}

export default SimpleCard