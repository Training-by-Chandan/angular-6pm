import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesClass } from 'src/app/categories-class';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  allcategories:Observable<CategoriesClass[]>;

  constructor(private categories: CategoriesService) { }

  ngOnInit(): void {
    this.allcategories = this.categories.GetAllCatgories();
  }

}
