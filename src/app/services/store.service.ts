import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StoreService {

	constructor() { }

	saveData(name: string, data: any) {
		localStorage.setItem(name, JSON.stringify(data));
	}

	// getData(name: string,  data: any) {
	// 	return JSON.parse(localStorage.getItem(name));
	// }

	clearData() {
		localStorage.clear();
	}
}
