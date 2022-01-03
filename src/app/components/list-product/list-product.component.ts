import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  @Input() listProduct : any;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  imgurl = "http://192.168.1.3:3000/images/products/";
  // @Input() listProduct : any;
  
  constructor() {
   }

  ngOnInit(): void {
  }
  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
