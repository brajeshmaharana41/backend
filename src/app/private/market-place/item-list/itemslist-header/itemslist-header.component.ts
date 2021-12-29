import { Component, OnInit, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ItemShortPopupComponent } from './item-short-popup/item-short-popup.component';
import { ItemFilterPopupComponent } from './item-filter-popup/item-filter-popup.component'
import { CategoryDataService } from 'src/app/servicess/category-data.service';


@Component({
  selector: 'app-itemslist-header',
  templateUrl: './itemslist-header.component.html',
  styleUrls: ['./itemslist-header.component.scss']
})
export class ItemslistHeaderComponent implements OnInit {
  categorys: any;
  constructor( public dialog: MatDialog, private userData: CategoryDataService) { 
    this.userData.users().subscribe((data) => {
      console.log("data", data)
      console.log("categorys", data)
      this.categorys= data;
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

  ngOnInit(): void {}
  
}
