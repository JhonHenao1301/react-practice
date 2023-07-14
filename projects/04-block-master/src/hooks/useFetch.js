
import { useEffect, useState } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=c2da535b`;

export const useFetch = (params) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    const fetchMovie = (url) => {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(resJson => {
                if (resJson.Response === "True") {
                    setData(resJson.Search || resJson);
                    setError(false);
                } else {
                    setError(true);
                }
                setIsLoading(false);
            }).catch(error => {console.log(error);})
    }

    useEffect(() => {
        fetchMovie(`${API_ENDPOINT}${params}`);
    }, [params])

    return {isLoading, error, data}
}