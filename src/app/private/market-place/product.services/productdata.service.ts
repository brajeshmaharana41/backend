import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  // pageSize = 5;
  // currentPage = 0;

  public readonly API_ENDPOINT: string = `http://192.168.1.3:3000`;

  public readonly ALL_CATEGORIES: string = this.API_ENDPOINT + `/category/minilist`;

  public readonly ALL_BRANDS: string = this.API_ENDPOINT + `/brand/minilist`;

  public readonly ALL_COLORS: string = this.API_ENDPOINT + `/color/minilist`;

  public readonly ALL_Price: string = this.API_ENDPOINT + `/pricerange/minilist`;

  // public readonly List_All_Products: string = this.API_ENDPOINT + `/product?search=&pagesize=${this.pageSize}&page=${this.currentPage + 1}&orderby=createdAt&orderbydir=DESC`;
  public readonly List_All_Products: string = this.API_ENDPOINT + `/product`;
  constructor() { }
}
