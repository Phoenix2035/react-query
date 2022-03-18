import {Fragment} from "react";
import {useInfiniteQuery} from "react-query";
import axios from "axios";

const fetchColors = async ({pageParam = 1}) => {
    return await axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}


const InfiniteQueriesPage = () => {
    const {
        data,
        isLoading,
        isError,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        isFetching
    } = useInfiniteQuery(["colors"], fetchColors, {
        getNextPageParam: (_lastPage, pages) => {
            if (pages.length < 4) {
                return pages.length + 1
            } else {
                return undefined
            }
        }
    })


    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <h2>{error.message}</h2>

    return (
        <>
            <div>
                {
                    data?.pages.map((item, index) =>
                        <Fragment key={index}>
                            <div>
                                {
                                    item.data.map(color =>
                                        <h2 key={color.id}>{color.id}- {color.label}</h2>
                                    )
                                }
                            </div>
                        </Fragment>
                    )
                }

            </div>
            <div>
                <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
            </div>
            <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
        </>
    );
};

export default InfiniteQueriesPage;
