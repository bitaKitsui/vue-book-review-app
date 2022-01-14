import axios from "axios";
import {Result} from "../types/types";

export const searchBook = async (query: string): Promise<Result> => {
    const { data } = await axios.get<Result>(`/books/v1/volumes?q=${query}`)
    return data
}

export const fetchBookById = async (id: string): Promise<any> => {
    const { data } = await axios.get<any>(`/books/v1/volumes/${id}`)
    return data
}