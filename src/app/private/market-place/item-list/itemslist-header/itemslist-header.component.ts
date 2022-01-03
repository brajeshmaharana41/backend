import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ItemShortPopupComponent } from './item-short-popup/item-short-popup.component';
import { ItemFilterPopupComponent } from './item-filter-popup/item-filter-popup.component'
import { CategoryApiServices } from '../../product.services/common.services/cateorydata';
@Component({
  selector: 'app-itemslist-header',
  templateUrl: './itemslist-header.component.html',
  styleUrls: ['./itemslist-header.component.scss']
})
export class ItemslistHeaderComponent implements OnInit {
  categorys: any;
  constructor( public dialog: MatDialog, private catagoryData: CategoryApiServices) { 
    this.catagoryData.getAllCategories().subscribe((catagorye : any) => {
      this.categorys = catagorye;
    })
   }
  openshortDialog(){
    this.dialog.open(ItemShortPopupComponent, {
      width: '250px',
    });
  }

  opensfilterDialog(){
    this.dialog.open(ItemFilterPopupComponent, {
      height: '600px',
      width: '300px', 
    });
  }

  ngOnInit(): void {
  }

}
