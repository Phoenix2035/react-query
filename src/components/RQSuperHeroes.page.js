import useSuperHeroesData from "../hooks/useSuperHeroesData"
import {Link} from "react-router-dom";

export const RQSuperHeroesPage = () => {

    const onSuccess = (data) => {
        console.log({data})
    }

    const OnError = (err) => {
        console.log({err})
    }

    const {data, isLoading, isFetching, refetch} = useSuperHeroesData(onSuccess, OnError)


    if (isLoading || isFetching) {
        return <h2>Loading........</h2>
    }


    return (
        <>
            <h2>Super Heroes Page</h2>
            <button onClick={refetch}>Fetch Heroes</button>
            {data?.data.map(hero => {
                return <div key={hero.id}>
                    <Link to={`/rq-super-heroes/${hero.id}`}>
                        {hero.name}
                    </Link>
                </div>
            })}
        </>
    )
}
