import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {
  url = "http://localhost:3000/category/minilist"
  constructor( private http: HttpClient) { }
  users(){
    return this.http.get(this.url)
  }
}
