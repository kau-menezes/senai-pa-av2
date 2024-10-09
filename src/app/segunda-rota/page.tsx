"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api";
import Card from "@/components/Card";

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
            characterName === "" ? setData(res.data.items) : setData(res.data);            

        }).catch( (err) => {
            console.log(err);
            if (err.response.status === 404) {

                setErrorMessage("Erro 400! Sinto muito, dados ou página não encontrados. ");
            }

            setError(true);
            
        })
      
    }, [characterName, page])
    

    return (
        <>
        {error && <h1>{errorMessage}</h1>}
        {data.length == 0 && <h1>Personagem ou página não encontradas!</h1>}
        <div className="flex gap-3 m-4 flex-wrap">
            <div className="flex gap-3">
                <label htmlFor="character-search" className="text-center flex flex-col items-center justify-center" >Character:</label>
                <input placeholder="E.g.: Goku..." className="bg-neutral-200 p-1 rounded" id="character-search" value={characterName} type="text" onChange={ (e) => { setCharacterName(e.target.value)}} />
            </div>
            <div className="flex gap-3">
                <label htmlFor="character-search" className="text-center flex flex-col items-center justify-center" >Page:</label>
                <input placeholder="1/6" value={page} className="bg-neutral-200 p-1 rounded" id="page" type="text" onChange={ (e) =>  setPage(e.target.value) } />
            </div>
        </div>
        <div className="flex flex-wrap w-10/12 gap-4 items-center justify-center">
            {data.map( ( item ) => {
                return(
                    <Card id={item.id} name={item.name} ki={item.ki} affiliation={item.affiliation} gender={item.gender} image={item.image} race={item.race} />
                )
            })}
        </div>
        </>
    )
}

export default AxiosPage;