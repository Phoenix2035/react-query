import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:4000"
})

export const request = ({...options}) => {
    client.defaults.headers.common.Authorization = "Bearer token"
    const onSuccess = res => res
    const onError = err => {
        // optionally catch errors and add additional logging here (maybe send user to login page)
        return err
    }

    return client(options).then(onSuccess).catch(onError)
}
