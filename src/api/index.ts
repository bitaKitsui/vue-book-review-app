import axios from "axios";
import {Result} from "../types/types";

export const searchBook = async (query: string): Promise<Result> => {
    const { data } = await axios.get<Result>(`/books/v1/volumes?q=${query}`)
    return data
}