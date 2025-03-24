import { Injectable } from '@angular/core';
import { ArticleCollection } from '../../models/article';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor() { }

  async findAll(): Promise<ArticleCollection>
  {
    const response = await fetch('http://localhost:8000/api/article')

    if (!response.ok) {
      return {data: []}
    }

    return response.json() as Promise<ArticleCollection>
  }



}
