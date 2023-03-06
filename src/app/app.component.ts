import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'my portfolio';

  constructor(public router: Router, private translate: TranslateService){
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {

  }
}
