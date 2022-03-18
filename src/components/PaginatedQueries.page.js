import {useState} from "react";
import {useQuery} from "react-query";
import {request} from "../api/axios.interceptor";

const fetchColors = async (page) => {
    return await request({url: `/colors?_limit=2&_page=${page}`})
}

const PaginatedQueriesPage = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const {data, isLoading, isError, error} = useQuery(["colors", pageNumber], () => fetchColors(pageNumber), {
        keepPreviousData: true
    })

    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <h2>{error.message}</h2>

    return (
        <>
            <div>
                {
                    data?.data.map(item =>
                        <div key={item.id}>
                            <h2>{item.label}</h2>
                        </div>
                    )
                }

            </div>
            <div>
                <button onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1}>
                    Prev Page
                </button>
                <button onClick={() => setPageNumber(page => page + 1)} disabled={pageNumber === 4}>
                    Next Page
                </button>
            </div>
        </>
    );
};

export default PaginatedQueriesPage;
