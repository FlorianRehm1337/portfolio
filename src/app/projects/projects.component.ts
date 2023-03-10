import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  windowInnerWidth = window.innerWidth;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowInnerWidth = event.target.innerWidth;
  }

  redirectToPage(page: string, event: any) {
    if (event.pointerType == 'mouse' && this.windowInnerWidth > 900) {
      window.open(page, '_blank').focus();
    }
  }

  redirectToPageMobile(page: string) {
    window.open(page, '_blank').focus();
  }
}
