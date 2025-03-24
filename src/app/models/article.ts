import { Category } from "./category"

export interface ArticleCollection  {
  data: Article[]
}

export interface Article {
    title: string
    slug: string
    content: string
    image: string
    author: string
    created_at: string
    comments: number
    categories : Category[]
}
