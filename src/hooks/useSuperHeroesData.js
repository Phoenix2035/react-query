import {useQuery, useMutation, useQueryClient} from "react-query";
import {request} from "../api/axios.interceptor";


const fetchSuperHeroes = async () => {
    return await request({url: "/superheroes"})
}
const addSuperHero = (hero) => {
    return request({url: "/superheroes", method: "post", data: hero})
}

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery("super-heroes", fetchSuperHeroes, {
        // cacheTime:2000
        // staleTime:Infinity
        // refetchOnWindowFocus:true
        // refetchInterval:2000 => har 2 sanie refetch mikone
        // refetchIntervalInBackground:true => hata age taraf to browser nabashe bazam refetch mikone
        //enabled: false  when component mount, not fetch any data related to this url
        onSuccess,
        onError,
    })
};


export const useAddSuperHeroesData = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperHero, {
        // onSuccess: (data) => {
        //     queryClient.invalidateQueries("super-heroes")
        //     queryClient.setQueryData("super-heroes", (oldQueryData) => {
        //         return {
        //             ...oldQueryData,
        //             data: [...oldQueryData.data, data.data]
        //         }
        //     })
        // }

        onMutate: async (newHero) => {  // update state before Post to api
            await queryClient.cancelQueries("super-heroes")
            const prevHeroData = queryClient.getQueryData("super-heroes")
            queryClient.setQueryData("super-heroes", (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [
                        ...oldQueryData.data,
                        {id: oldQueryData?.data?.length + 1, ...newHero}
                    ]
                }
            })
            return {prevHeroData}
        },
        onError: (_error, _hero, context) => {
            queryClient.setQueryData("super-heroes", context.prevHeroData)
        },
        onSettled: () => {
            queryClient.invalidateQueries("super-heroes").then()
        }
    })
}
