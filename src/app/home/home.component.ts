import { Component, OnInit } from '@angular/core';
import TypeIt from "typeit";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let canvas = document.querySelectorAll('canvas');
    canvas.forEach(el => {
      el.style.display = 'none';

      
    })


    new (TypeIt as any)("#typing-headline", {
      //strings: ["Welcome to my site,", "I am glad you are here."],
      speed: 50,
      waitUntilVisible: true,
    })
      .go();


  }
}

