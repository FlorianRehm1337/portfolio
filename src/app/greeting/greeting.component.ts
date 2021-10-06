import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    this.updateHeadline();
  }

  updateHeadline(){

  }

 /*  animateArrow(){
    setInterval(() => {

    }, 1000);
  } */

}
