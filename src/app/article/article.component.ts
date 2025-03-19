import { Component, Input, input } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})

export class ArticleComponent {

  @Input() article !: Article

  excerptText(content: string, limit: number): string {
    return content.length <= limit ? content : content.substring(limit) + '...'
  }

}
