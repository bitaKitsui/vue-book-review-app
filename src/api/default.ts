import {BookItem, Result} from "../types/types";

export const defaultResult: Result = {
    items: [],
    kind: '',
    totalItems: 0
}

export const defaultBookItem: BookItem = {
    id: '',
    volumeInfo: {
        title: '',
        authors: [],
        publishedDate: '',
        description: '',
        publisher: '',
        imageLinks: undefined,
        pageCount: 0,
        previewLink: ''
    },
    saleInfo: {
        listPrice: {
            amount: 0
        }
    }
}