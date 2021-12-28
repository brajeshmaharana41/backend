import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public readonly API_ENDPOINT: string = 'http://localhost:3000';
  public readonly ALL_CATEGORIES: string = this.API_ENDPOINT + '/category/minilist';
}
