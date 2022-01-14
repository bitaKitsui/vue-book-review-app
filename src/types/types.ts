export interface Result {
    items: BookItem[],
    kind: string,
    totalItems: number
}

export interface BookItem {
    id: string
    volumeInfo: {
        title: string
        authors?: string[]
        publishedDate?: string
        description?: string
        publisher?: string
        imageLinks?: {
            smallThumbnail: string
            thumbnail: string
        }
        pageCount: number
        previewLink?: string
    }
    saleInfo?: {
        listPrice: {
            amount: number
        }
    }
}

export interface Params {
    query: string
    startIndex?: number
}

export interface Card {
    id: string
    title: string
    description?: string
    imageLinks?: {
        smallThumbnail: string
        thumbnail: string
    }
}