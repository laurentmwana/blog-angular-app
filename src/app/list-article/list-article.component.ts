import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../models/article';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-article',
  imports: [ArticleComponent, NgFor],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent {

  articles !: Article[]

  ngOnInit(): void {

    this.articles = [
      {
        title : "Apprendre Nextjs",
        slug : "apprendre-nextjs",
        author : "Laurent Mwana",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOS9_2KGa3W7OpKqUzUNNpOV81C_bKrU0uA&s",
        created_at : "2022-04-20 12:14:12",
        nb_comments : 10,
        content : "Cet article est un simple test pour afficher les articles dans une application. Il permet de vérifier que l'affichage fonctionne correctement et que le contenu est bien structuré.",
        categories : ['Python', 'Algorithmique']
      },

      {
        title : "Apprendre python",
        slug : "apprendre-python",
        author : "Laurent Mwana",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOS9_2KGa3W7OpKqUzUNNpOV81C_bKrU0uA&s",
        created_at : "2022-04-20 12:14:12",
        nb_comments : 12,
        content : "Cet article est un simple test pour afficher les articles dans une application. Il permet de vérifier que l'affichage fonctionne correctement et que le contenu est bien structuré.",
        categories : ['Programmation', 'Algorithmique']
      },


      {
        title : "Apprendre python",
        slug : "apprendre-python",
        author : "Laurent Mwana",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOS9_2KGa3W7OpKqUzUNNpOV81C_bKrU0uA&s",
        created_at : "2022-04-20 12:14:12",
        nb_comments : 12,
        content : "Cet article est un simple test pour afficher les articles dans une application. Il permet de vérifier que l'affichage fonctionne correctement et que le contenu est bien structuré.",
        categories : ['Programmation', 'Algorithmique']
      },

      {
        title : "Apprendre python",
        slug : "apprendre-python",
        author : "Laurent Mwana",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOS9_2KGa3W7OpKqUzUNNpOV81C_bKrU0uA&s",
        created_at : "2022-04-20 12:14:12",
        nb_comments : 12,
        content : "Cet article est un simple test pour afficher les articles dans une application. Il permet de vérifier que l'affichage fonctionne correctement et que le contenu est bien structuré.",
        categories : ['Programmation', 'Algorithmique']
      }
    ]

  }
}
