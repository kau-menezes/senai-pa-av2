import SimpleCard from "@/components/SimpleCard";
import Link from "next/link";
import React, { Suspense } from "react"

const baseurl = "https://dragonball-api.com/api/characters/";

type TData = {
    items: {
        id: number,
        name: string, 
        ki: string,
        race: string,
        gender: string,
    }[]
}

const ServerSidePage : React.FC = async () => {
    
    const res = await fetch(baseurl);

    const data : TData = await res.json();

    console.log(data);
    

    return(
        <>
            <Suspense fallback={<h1>loading...</h1>}>
                <div className="flex gap-3 m-4 flex-wrap justify-center">
                    {data.items.map( ( item ) => {
                        return(
                            <SimpleCard key={item.id} id={item.id} name={item.name} ki={item.ki} gender={item.gender} race={item.race}/>
                        )
                    })}
                </div>
            </Suspense>
        </>
    )
}

export default ServerSidePage;