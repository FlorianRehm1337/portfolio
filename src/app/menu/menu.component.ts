import { animate, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('sideMenu', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(-100%)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }
  menuState: string = 'out';

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
    if (event.target.innerWidth >= 900) {
      this.menuState = 'in';
    } else {
      this.menuState = 'out';
    }
  }

  ngOnInit(): void {
    let canvas = document.querySelectorAll('canvas');
    canvas.forEach(el => {
      el.style.display = 'none';
    })

    if (innerWidth >= 900) {
      this.menuState = 'in';
    }
  }

  toggleNav() {
    if (window.innerWidth <= 900) {
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }

  }

}
