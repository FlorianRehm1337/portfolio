import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
kochwelt_bg = '/assets/img/project-kochwelt.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
