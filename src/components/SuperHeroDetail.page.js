import {useParams} from "react-router-dom";

import useSuperHeroDetailData from "../hooks/useSuperHeroDetailData";

const SuperHeroDetailPage = () => {
    const {heroId} = useParams()

    const {data, isLoading, isError, error} = useSuperHeroDetailData(heroId)

    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <h2>{error.message}</h2>

    return (
        <div>
            {data?.data.name} - {data?.data.alterEgo}
        </div>
    );
};

export default SuperHeroDetailPage;
