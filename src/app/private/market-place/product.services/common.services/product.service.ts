import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductApiService } from "../productdata.service";

@Injectable({
    providedIn: 'root'
})

export class ProductservicesList {

    constructor (private http : HttpClient, private apiservices: ProductApiService) {
    }

    getAllProducts(params : any) {
        return this.http.get(this.apiservices.List_All_Products, {
            params: params
        })
    }
}