import {useQuery} from "react-query";
import axios from "axios";


const fetchSuperHeroDetail = async ({queryKey}) => {
    const heroId = queryKey[1]
    return await axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

const useSuperHeroDetailData = (heroID) => {
    return useQuery(['super-hero-detail', heroID], fetchSuperHeroDetail)
};

export default useSuperHeroDetailData;
