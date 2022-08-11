import {POPULAR_DOSHIK_DATA} from "./mock";
import {Doshik} from "../types";

export const fetchPopularDoshirakData = async () => new Promise<Doshik[]>((res) => {
    setTimeout(() => {
        res(POPULAR_DOSHIK_DATA)
    }, 1000)
})
