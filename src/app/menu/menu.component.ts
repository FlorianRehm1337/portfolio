import { animate, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [],
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

  constructor(public translate: TranslateService) { }
  menuState: string = 'out';
  menuHidden: boolean = true;
  language: string = '';

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
    this.language = localStorage.getItem('lang') || 'en';
    this.translate.use(this.language);
    let canvas = document.querySelectorAll('canvas');
    canvas.forEach(el => {
      el.style.display = 'none';
    })

    if (innerWidth >= 900) {
      this.menuState = 'in';
      this.menuHidden = false;
    } else {
      setTimeout(() => {
        this.menuHidden = false;
      }, 1000)
    }
  }

  toggleNav() {
    if (window.innerWidth <= 900) {
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }

  }

  handleLanguage(choosenLanguage:string) {
    this.language = choosenLanguage;
    localStorage.setItem('lang', choosenLanguage);
    this.translate.use(choosenLanguage);
  }

}
