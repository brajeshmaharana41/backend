import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
	providedIn: 'root'
})

export class CategoryServices {
    constructor(private http: HttpClient, private urlService: ProductService) { }
    getAllCategories() {
		return new Promise((resolve, reject) => {
			this.http.get(this.urlService.ALL_CATEGORIES)
				.toPromise()
				.then(
					response => resolve(response),
					error => reject(error)
				);
		});
	}
}