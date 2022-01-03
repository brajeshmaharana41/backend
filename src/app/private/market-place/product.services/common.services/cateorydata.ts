import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductApiService } from "../productdata.service";

@Injectable({
    providedIn: 'root'
})

export class CategoryApiServices {

    constructor (private http : HttpClient, private apiservices: ProductApiService) {
    }

    getAllCategories() {
        return this.http.get(this.apiservices.ALL_CATEGORIES)
    }
}