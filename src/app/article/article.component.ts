import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  title:string = 'Whatever you want';
  content:string = 'Some content goes here';
  isTechRelated: boolean = true;
  myStyles: { 'background-color': string; };

  constructor() {
    this.myStyles = {
      'background-color': this.isTechRelated ? 'blue' : 'yellow',
    };
  }
}


