import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  arr = ['tuan', 'hanh', 'hn'];
en = 'hello';
vn = 'xin chao';
images = 'https://www.tiepphan.com/assets/logo.png';
forgot = true;
  constructor() { }

  ngOnInit() {
  }

  showh3() {
    this.forgot = !this.forgot;
  }
}
