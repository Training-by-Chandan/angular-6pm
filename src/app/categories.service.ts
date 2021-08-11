import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CategoriesClass } from './categories-class';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url='https://localhost:44387/api/categoriesapi';
 
  constructor(private http: HttpClient) { }

  GetAllCatgories(): Observable<CategoriesClass[]> {
    const data=this.http.get<CategoriesClass[]>(this.url+"/getcategories");
    console.log(data);
    return data;
    
  }
}
