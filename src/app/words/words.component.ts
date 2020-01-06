import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
showform = false;
  newVn;
  newEn;
     arrWords = [
       {id: 1, en: 'hello', vn: 'xinchao', memorized: true},
       {id: 2, en: 'hi', vn: 'xinchaocau', memorized: false},
       {id: 3, en: 'hello', vn: 'xinchao', memorized: false},
       {id: 4, en: 'hello', vn: 'xinchao', memorized: true},
     ];

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.arrWords.push({
      id: this.arrWords.length +1,
      en: this.newEn,
      vn: this.newVn   ,
      memorized: false
    });
    this.newVn = '';
    this.newEn = '';
    this.showform = false;
  }

  remove(id: number) {
 const index = this.arrWords.findIndex(arr => arr.id === id);
 this.arrWords.splice(index, 1);
  }
}
