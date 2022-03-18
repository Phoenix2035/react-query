import {useState} from "react";
import {Link} from "react-router-dom";

import {useAddSuperHeroesData, useSuperHeroesData} from "../hooks/useSuperHeroesData"


export const SuperHeroesPage = () => {
    const [name, setName] = useState("")
    const [alterEgo, setAlterEgo] = useState("")

    const onSuccess = (data) => {
        console.log({data})
    }

    const OnError = (err) => {
        console.log({err})
    }

    const {mutate: addHero} = useAddSuperHeroesData()

    const handleAddHero = () => {
        const hero = {name, alterEgo}
        addHero(hero)
    }

    const {data, isLoading} = useSuperHeroesData(onSuccess, OnError)


    if (isLoading) {
        return <h2>Loading........</h2>
    }


    return (
        <>
            <h2>Super Heroes Page</h2>
            <div>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" value={alterEgo} onChange={e => setAlterEgo(e.target.value)}/>
                <button onClick={handleAddHero}>Add Hero</button>
            </div>
            <br/>
            <button>Fetch Heroes</button>
            {data?.data.map(hero => {
                return (
                    <div key={hero.id}>
                        <Link to={`/super-heroes/${hero.id}`}>
                            {hero.name}
                        </Link>
                    </div>
                )
            })}
        </>
    )
}
