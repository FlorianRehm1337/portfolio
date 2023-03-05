import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  /* redirectToPage(page:string, id:string){

    if (page){

    }
   // location.href = page;
  } */
  redirectToPage(page:string){
    window.open(page, '_blank').focus();
   // location.href = page;
  }
}
