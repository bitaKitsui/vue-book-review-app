import axios from "axios";
import { Result, BookItem } from "../types/types";

export const searchBook = async (query: string): Promise<Result> => {
    const { data } = await axios.get<Result>(`/books/v1/volumes?q=${query}`)
    return data
}

export const fetchBookById = async (id: string): Promise<BookItem> => {
    const { data } = await axios.get<BookItem>(`/books/v1/volumes/${id}`)
    return data
}