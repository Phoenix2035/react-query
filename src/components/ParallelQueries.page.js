import {useQuery} from "react-query";
import {request} from "../api/axios.interceptor";

const fetchSuperHeroes = async () => {
    return await request({url: "/superheroes"})
}

const fetchFriends = async () => {
    return await request({url: "/friends"})
}

const ParallelQueriesPage = () => {
    const {data: superHeroes} = useQuery("super-heroes", fetchSuperHeroes)
    const {data: friends} = useQuery("friends", fetchFriends)

    console.log({superHeroes})
    console.log({friends})


    return (
        <div>
            Parallel Queries
        </div>
    );
};

export default ParallelQueriesPage;
