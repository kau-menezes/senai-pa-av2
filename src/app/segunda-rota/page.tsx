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
      
        const data = api.get(`/characters/?name=${characterName}&page=${page}`).then( (res) => {
            setError(false);
            console.log(data);
            
            console.log(res.data.items);
            console.log(res.data);
            console.log(characterName);

            
            console.log(data);
            
            characterName === "" ? setData(res.data.items) : setData(res.data);            


        }).catch( (err) => {
            console.log(err);
            if (err.response.status === 404) {

                setErrorMessage("Erro 400. Dados ou página não encontrados. ");
            }

            setError(true);
            
        })
      
    }, [characterName, page])
    

    return (
        <>
        {error && <h1>{errorMessage}</h1>}
        {data.length == 0 && <h1>Personagem não encontrada!</h1>}
        <div className="flex gap-3">
            <div className="flex gap-3">
                <label htmlFor="character-search">Character:</label>
                <input placeholder="Type a character name..." className="bg-neutral-100 p-2" id="character-search" value={characterName} type="text" onChange={ (e) => { setCharacterName(e.target.value)}} />
                {/* <input type="text" onChange={ (e) => { setCharacterName(e.target.value)} } /> */}
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