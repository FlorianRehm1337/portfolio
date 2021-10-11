import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  btnAll = true;
  btnAng = false;
  btnJS = false;
  status: any;
  JS = true;
  Angular = true;

  showAll() {
    this.JS = true;
    this.Angular = true;
    this.btnAng = false;
    this.btnJS = false;
    this.btnAll = true;
  }

  showAngular() {
    this.Angular = true;
    this.JS = false;
    this.btnAng = true;
    this.btnJS = false;
    this.btnAll = false;
  }

  showJS() {
    this.JS = true;
    this.Angular = false;
    this.btnAng = false;
    this.btnJS = true;
    this.btnAll = false;
  }

}
