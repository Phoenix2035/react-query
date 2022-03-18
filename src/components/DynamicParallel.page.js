import {useQueries} from "react-query";
import {request} from "../api/axios.interceptor";

const fetchSuperHeroes = async (heroId) => {
    return await request({url: `/superheroes/${heroId}`})
}

const DynamicParallelPage = ({heroIds}) => {
    const queryResults = useQueries(
        heroIds.map(id => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHeroes(id)
            }
        })
    )

    console.log({queryResults})

    return (
        <div>
            Dynamic Parallel
        </div>
    );
};

export default DynamicParallelPage;
