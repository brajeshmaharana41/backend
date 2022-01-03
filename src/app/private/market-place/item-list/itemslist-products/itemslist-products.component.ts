import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ProductservicesList } from '../../product.services/common.services/product.service';

export interface USER {}
@Component({
  selector: 'app-itemslist-products',
  templateUrl: './itemslist-products.component.html',
  styleUrls: ['./itemslist-products.component.scss']
})
export class ItemslistProductsComponent implements OnInit {

  ELEMENT_DATA: USER[] = [];
  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];
  products : any;
  categoryId: any[];
  brand: any
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  constructor( private productserv: ProductservicesList) { }
  
  ngOnInit(): void {
    this.lodeproduct();
    
  }
  ngAfterViewInit() {
    console.log(this.brand)
  }
  lodeproduct() {
    this.isLoading = true;
    this.productserv.getAllProducts({pagesize : this.pageSize, page: this.currentPage + 1,}).subscribe((res : any) => {
      this.products= res.rows;
      setTimeout(() => {
        this.paginator.pageIndex = this.currentPage;
        this.paginator.length = res.count;
      });
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
   }

   pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.lodeproduct();
  }
  


}
