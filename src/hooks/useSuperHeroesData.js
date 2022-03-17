import {useQuery} from "react-query";
import axios from "axios";


const fetchSuperHeroes = async () => {
    return await axios.get("http://localhost:4000/superheroes")
}

const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery("superHeroes", fetchSuperHeroes, {
        // cacheTime:2000
        // staleTime:Infinity
        // refetchOnWindowFocus:true
        // refetchInterval:2000 => har 2 sanie refetch mikone
        // refetchIntervalInBackground:true => hata age taraf to browser nabashe bazam refetch mikone
        enabled: false, // when component mount, not fetch any data related to this url
        onSuccess,
        onError
    })
};

export default useSuperHeroesData
