"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api";

interface IData {
    id: number,
    name: string, 
    ki: string,
    image: string,
    race: string,
    gender: string,
    affiliation: string
}

const AxiosPage = () => {

    const [data, setData] = useState<IData[]>([]);
    const [characterName, setCharacterName] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("Character not found!");
    const [page, setPage] = useState<string>("");

    useEffect(() => {
      
        const data = api.get(`/character/?name=${characterName}`).then( (res) => {
            setError(false);
            console.log(res.data.results);

            if (characterName == "") {
                setData(res.data.items);

            } else {
                setData(res.data);
            }

        }).catch( (err) => {
            console.log(err);
            if (err.response.status === 400) {

                setErrorMessage("Erro 400. Dados ou página não encontrados. ");
            }

            setError(true);
            
        })

        
      
    }, [characterName])
    

    return (
        <>
        {error && <h1>{errorMessage}</h1>}
        {data.length === 0 && <h1>Personagem não encontrada!</h1>}
        <h1 className="font-bold">axios! </h1>
        <div className="flex gap-3">
            <div className="flex gap-3">
                <label htmlFor="character-search">Character:</label>
                <input placeholder="Type a character name..." className="bg-neutral-100 p-2" id="character-search" type="text" onChange={ (e) => { setCharacterName(e.target.value)}} />
                <p>{characterName}</p>
            </div>
            <div>
                <label htmlFor="page">Page:</label>
                <input placeholder="1/42" value={page} className="bg-neutral-100 p-2" id="page" type="text" onChange={ (e) =>  setPage(e.target.value) } />
                <p>{page}</p>
            </div>
        </div>
        <div className="flex flex-wrap w-10/12 gap-4">
            {data.map( ( item ) => {
                return(
                    <h1>{item.name}</h1>
                )
            })}
        </div>
        </>
    )
}

export default AxiosPage;