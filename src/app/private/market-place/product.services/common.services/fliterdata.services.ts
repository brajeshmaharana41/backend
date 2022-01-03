import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductApiService } from "../productdata.service";

@Injectable({
    providedIn: 'root'
})

export class FilterApiServices {

    constructor (private http : HttpClient, private apiservices: ProductApiService) {
    }

    getAllBrands() {
        return this.http.get(this.apiservices.ALL_BRANDS)
    }
    getAllColors() {
        return this.http.get(this.apiservices.ALL_COLORS)
    }
    getAllPrices() {
        return this.http.get(this.apiservices.ALL_Price)
    }
}