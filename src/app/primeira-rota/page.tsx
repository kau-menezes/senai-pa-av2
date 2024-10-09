"use client"

import { Suspense, useEffect, useState } from "react";
import Card from "@/components/Card";

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
        <Suspense fallback={
            <>
                <h1 className="bg-amber-300 p-8 text-base text-amber-800 font-semibold m-4 hover:scale-110 transition-transform duration-500 ">Carregando...</h1>
            </>
        }>
            <div className="flex flex-wrap w-10/12 items-center justify-center gap-4 m-16">

                {characters.map( ( item ) => {
                    return(
                        <Card id={item.id} name={item.name} ki={item.ki} affiliation={item.affiliation} gender={item.gender} image={item.image} race={item.race} />
                    )
                })}

            </div>
        </Suspense>
    )
}

export default FetchPage;