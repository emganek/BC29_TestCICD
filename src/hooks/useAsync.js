import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../contexts/loading.context";

export const useAsync = ({ dependencies = [], service }) => {
    const [_, setIsLoading] = useContext(LoadingContext);
    const [state, setState] = useState()

    useEffect(() => {
        fetchData()
    }, dependencies);

    const fetchData = async () => {
        setIsLoading({ isLoading: true });
        const movieList = await(await service()).data.content
        setState(movieList);
        setIsLoading({ isLoading: false });
    }

    return {
        state
    }
}