import ComplexCard from "@/components/ComplexCard"

interface IPerson {
    params: {
        id: string
    }
}

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
    affiliation: string
    originPlanet: {
        name: string
    },
    transformations: []
}

const Person = async ({params: {id}}: IPerson) => {

    const res = await fetch(`https://dragonball-api.com/api/characters/${id}`)
    
    const data : IData = await res.json();

    return(
        <div className="h-fit">
            <ComplexCard id={data.id} name={data.name} ki={data.ki} affiliation={data.affiliation} gender={data.gender} image={data.image} race={data.race} maxKi={data.maxKi} originPlanet={data.originPlanet.name} transformations={data.transformations} />
            {/* <p>{data.transformations.map( item => {
                return(
                    <p>{item.name}</p>
                )
            })}</p> */}
        </div>
    )
}

export default Person;