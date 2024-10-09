"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

import bg1 from "@/assets/bg1.png"
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
        <>
        <p>Fetch!</p>
        <div className="flex flex-wrap w-full items-center justify-center gap-4">

            {characters.map( ( item ) => {
                return(
                    <Card id={item.id} name={item.name} ki={item.ki} affiliation={item.affiliation} gender={item.gender} image={item.image} race={item.race} />
                )
            })}

        </div>

        </>
    )
}

export default FetchPage;