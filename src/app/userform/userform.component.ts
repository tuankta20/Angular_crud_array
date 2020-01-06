import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
name = '';
  constructor() { }

  ngOnInit() {
  }

  // showEvent(event){
  //   this.name = event.target.value;
  //
  // }

}
