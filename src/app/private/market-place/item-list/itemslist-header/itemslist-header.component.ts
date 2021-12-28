import { Component, OnInit, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ItemShortPopupComponent } from './item-short-popup/item-short-popup.component';
import { ItemFilterPopupComponent } from './item-filter-popup/item-filter-popup.component'
import { CategoryServices } from '../../../../services/category.services'
import { StoreService } from '../../../../services/store.service';

@Component({
  selector: 'app-itemslist-header',
  templateUrl: './itemslist-header.component.html',
  styleUrls: ['./itemslist-header.component.scss']
})
export class ItemslistHeaderComponent implements OnInit {

  @Input() miniCategories: boolean;
	@Output() closeSidebar = new EventEmitter();
	@ViewChild('catList') catList: ElementRef;
	@ViewChild('miniSubCatList') miniSubCatList: ElementRef;
	categoriesList = [];
	classesList = [];
	isCategoriesOpen: boolean = false;
	openCategories: boolean = false;
	mainClassName: string;

  constructor( public dialog: MatDialog,
    private commonService: CategoryServices,
		private store: StoreService,
    ) { }
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
    this.commonService.getAllCategories().then(
			(response: any) => {
				if (response.status === 200) {
					this.categoriesList = response.result;
				}
			},
			error => console.log(error)
		);
  }

}
