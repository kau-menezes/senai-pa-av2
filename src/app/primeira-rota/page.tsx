"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

import bg1 from "@/assets/bg1.png"

const baseulr = "https://dragonball-api.com/api/characters"

interface IData {
    id: number,
    name: string, 
    ki: string,
    image: string,
    race: string,
    gender: string,
    affiliation: string
}

const FetchPage = () => {

    const [characters, setCharacters] = useState<IData[]>([]);

    useEffect(() => {
        const load = async() => {
            const res = await fetch(baseulr);
            const data = await res.json();

            console.log(data);

            setCharacters(data.items);
        }
    
        load()

    }, [])
    

    return (
        <>
        <p>Fetch!</p>
        <div className="flex flex-wrap w-full items-center justify-center gap-4">

            {characters.map( ( item ) => {
                return(
                    <div className="shadow-md relative h-[600px] w-[300px] flex flex-col rounded " key={ item.id }>
                        <div className="h-2/3">
                            <Image className=" h-full object-cover opacity-60 z-30 rounded" src={bg1} alt="card background "/>
                        </div>
                        <div className="h-1/3 flex flex-col items-center justify-between overflow-hidden">
                            <div className="mt-8 w-1/2">
                                <p className=" text-amber-600 font-semibold text-sm text-center">KI {item.ki}</p>
                                <p className="mt-1 font-bold text-xl text-wrap text-foreground text-center">{ item.name }</p>
                            </div>
                            <Image className="min-h-[400px] h-full max-h-[400px] max-w-[280px] hover:scale-110 object-scale-down transition-transform duration-500 absolute top-3 self-center" src={item.image} alt={item.name} width={280} height={400}/>
                            <div className="flex justify-center divide-amber-700 divide-x-2 w-full rounded-md overflow-hidden">
                                <div className={` flex flex-col items-center p-2 w-1/3 bg-amber-500 leading-tight`}>
                                    <p className="text-white font-medium text-center">{item.race}</p>
                                    <p className="text-amber-700 text-center font-medium text-sm px-2">Race</p>
                                </div>
                                <div className={` flex flex-col items-center p-2 w-1/3 bg-amber-500 leading-tight`}>
                                    <p className="text-white font-medium text-center">{item.gender}</p>
                                    <p className="text-amber-700 text-center font-medium text-sm px-2">Gender</p>
                                </div>
                                <div className={` flex flex-col items-center p-2 w-1/3 bg-amber-500 leading-tight `}>
                                    <p className="text-white font-medium text-center">{item.affiliation}</p>
                                    <p className="text-amber-700 text-center font-medium text-sm px-2">Affiliation</p>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}

        </div>

        </>
    )
}

export default FetchPage;