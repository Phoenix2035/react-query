import {useQuery, useQueryClient} from "react-query";
import axios from "axios";


const fetchSuperHeroDetail = async ({queryKey}) => {
    const heroId = queryKey[1]
    return await axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

const useSuperHeroDetailData = (heroID) => {
    const queryClient = useQueryClient()

    return useQuery(['super-hero-detail', heroID], fetchSuperHeroDetail, {
        initialData: () => {
            const hero = queryClient.getQueryData("super-hero-detail")?.data?.find(item => item.id === heroID)
            if (hero) {
                return {data: hero}
            } else {
                return undefined
            }
        }
    })
};

export default useSuperHeroDetailData;
