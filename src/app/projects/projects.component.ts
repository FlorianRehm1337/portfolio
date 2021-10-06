import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  buttonAll = false;
  buttonAng = false;
  buttonJS = false;

  constructor() { }

  ngOnInit(): void {
    this.buttonAll = true;
    this.buttonAng = false;
    this.buttonJS = false;
  }

  showAll(){
    
  }

  showAngular(){

  }

  showJS(){

  }

}
