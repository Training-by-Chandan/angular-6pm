import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string = 'Nav';
  
  constructor() { }

  ngOnInit(): void {
  }

  loadtitle(title: string): void {
    this.title=title;
    
  }


}
