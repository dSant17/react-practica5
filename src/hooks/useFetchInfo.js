import { useEffect, useState } from "react";
import { getInfo } from "../helpers/getInfo";

export const useFetchInfo = () => {
    const [state, setState] = useState({
        data: []
    });

    useEffect(() => {
        getInfo().then(info => {
            console.log(info);
            setState({ data: info })
        });
    }, []);

    return state;
}
