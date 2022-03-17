import {useQuery} from "react-query";
import axios from "axios";

const fetchSuperHeroes = async () => {
    return await axios.get(`http://localhost:4000/superheroes`)
}

const fetchFriends = async () => {
    return await axios.get(`http://localhost:4000/friends`)
}

const ParallelQueriesPage = () => {
    const {data: superHeroes} = useQuery("super-heroes", fetchSuperHeroes)
    const {data: friends} = useQuery("friends", fetchFriends)


    return (
        <div>
            Parallel Queries
        </div>
    );
};

export default ParallelQueriesPage;
