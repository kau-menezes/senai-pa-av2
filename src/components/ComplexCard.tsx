import Image from "next/image";
import bg1 from "@/assets/bg1.png"
import bg3 from "@/assets/bg3.jpg"
import { log } from "console";
import { renderToString } from "react-dom/server";

type TTransformation = {
    id: number,
    name: string,
    image: string,
    ki: string,
    deletedAt: string
}[]

interface IData {
    id: string,
    name: string, 
    ki: string,
    maxKi: string,
    image: string,
    race: string,
    gender: string,
    affiliation: string,
    originPlanet:  string,
    transformations:[ ] | any
    
}

const ComplexCard = ({id, name, ki, image, race, gender, affiliation, maxKi, originPlanet, transformations }: any) => {
    return(
        <div className="shadow-lg relative h-[fit] w-[700px] flex flex-col rounded my-16 py-4" key={ id }>
            <div className="h-[380px]">
                <Image className=" h-full object-cover opacity-60 z-30 rounded" src={bg3} alt="card background "/>
            </div>
            <div className="min-h-[200px]  flex flex-col items-center justify-between overflow-hidden gap-4">
                <div className="mt-8 w-1/2">
                    <p className=" text-amber-600 font-semibold text-sm text-center">KI {ki}</p>
                    <p className="mt-1 font-bold text-3xl text-wrap text-foreground text-center">{ name }</p>
                </div>
                <Image className="min-h-[400px] h-full max-h-[400px] max-w-[280px] hover:cursor-pointer hover:scale-110 object-scale-down transition-transform duration-500 absolute top-3 self-center" src={image} alt={name} width={280} height={400}/>
                <div className="flex flex-col justify-center w-full rounded-md overflow-hidden gap-4 divide-y-2 divide-gray-300">
                    <div className="flex w-full justify-between p-2">
                        <div className="flex gap-3">
                            <h2 className="font-semibold text-amber-600">KI:</h2>
                            <h2 className="font-medium">{ki}</h2>
                        </div>
                        <div className="flex gap-3">
                            <h2 className="font-semibold text-amber-600">Max KI:</h2>
                            <h2 className="font-medium">{maxKi}</h2>
                        </div>
                    </div>
                    <div className="flex w-full justify-between p-2">
                        <div className="flex gap-3">
                            <h2 className="font-semibold text-amber-600">Affiliation:</h2>
                            <h2 className="font-medium">{affiliation}</h2>
                        </div>
                        <div className="flex gap-3">
                            <h2 className="font-semibold text-amber-600">Planet:</h2>
                            <h2 className="font-medium">{originPlanet && originPlanet}</h2>
                        </div>
                    </div>
                    <div className="flex w-full justify-between p-2">
                        <div className="flex gap-3">
                            <h2 className="font-semibold text-amber-600">Race:</h2>
                            <h2 className="font-medium">{race}</h2>
                        </div>
                        <div className="flex gap-3">
                            <h2 className="font-semibold text-amber-600">Gender:</h2>
                            <h2 className="font-medium">{gender}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-4 flex-col justify-center">
                <h2 className="font-semibold text-xl text-red-700 my-8">Transformations:</h2>
                <div className="flex flex-wrap gap-3 justify-center mb-8 ">
                    {transformations.length == 0 ? 
                    <p>No transformations!</p> 
                    : 
                    <>
                        {transformations.map( (item : any) : any => {
                            return(
                                <div className="shadow-md p-3 relative w-[210px]">
                                    <Image className="min-h-[250px] w-[210px] h-full z-30 max-h-[200px] hover:cursor-pointer hover:scale-110 object-scale-down transition-transform duration-500 top-3 self-center" src={item.image} alt={name} width={280} height={400}/>
                                    <h2 className="font-medium text-gray-400 text-wrap text-ellipsis bg-white w-full">{item.name}</h2>
                                    <Image className=" h-[250px] object-cover w-[210px] opacity-60 z-[-1] rounded absolute top-0" src={bg1} alt="card background "/>
                                </div>
                            )
                        })}
                    </>}

                    
                </div>

            </div>
            

        </div>
    )
}

export default ComplexCard