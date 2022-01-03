import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FilterApiServices } from '../../product.services/common.services/fliterdata.services';

@Component({
  selector: 'app-itemslist-filter',
  templateUrl: './itemslist-filter.component.html',
  styleUrls: ['./itemslist-filter.component.scss']
})
export class ItemslistFilterComponent implements OnInit {
   
  allbrans : any;
  allcolors: any;
  allprices: any;
  panelOpenState = true;
  brandid: any;

  constructor(private fliterData: FilterApiServices) { 
    this.fliterData.getAllBrands().subscribe((brand : any) => {
      this.allbrans = brand;
    })
    this.fliterData.getAllColors().subscribe((color: any) => {
      this.allcolors = color;
    })
    this.fliterData.getAllPrices().subscribe((price: any) => {
      this.allprices = price;
    })
   }
   public editDataDetails: any = [];

   public subject = new Subject<any>();
   private messageSource = new  BehaviorSubject(this.editDataDetails);
   currentMessage = this.messageSource.asObservable();
   onChange($event: any) {
     this.brandid = $event.value
    console.log(this.brandid);  
} 
  ngOnInit(): void {
  }

}
