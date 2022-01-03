// import { Component, OnInit } from '@angular/core';

// export interface ListProductData {
//   image: string;
//   title: string;
//   subtitle: string;
//   description: string;

//   reviews: number;
//   offers: number;
//   rating : number;
//   price: number;

//   favorite: string;
//   button_btn: string;
// }

// const ProductData: ListProductData[] = [
//   { 
//     image: '../../../../../assets/product4.png',
//     title: 'School Bag Canvas with Art Kit',
//     subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
//     description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

//     reviews: 75,
//     offers: 5,
//     rating : 4.5,
//     price: 150,

//     favorite: 'favorite_border',
//     button_btn: 'Buy'
//   },

//   { 
//     image: '../../../../../assets/product2.png',
//     title: 'PARKER Vector Gold Pen',
//     subtitle: '(Gold Nib) Fountain Pen',
//     description: 'Body Color: Gold, Made of Gold Plated, Ink Color: Blue',

//     reviews: 75,
//     offers: 20,
//     rating : 4.5,
//     price: 12,

//     favorite: 'favorite_border',
//     button_btn: 'Buy'
//   },

//   { 
//     image: '../../../../../assets/product1.png',
//     title: 'Funblast Bag',
//     subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
//     description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

//     reviews: 75,
//     offers: 5,
//     rating : 4.5,
//     price: 100,

//     favorite: 'favorite_border',
//     button_btn: 'Buy'
//   },

//   { 
//     image: '../../../../../assets/product3.png',
//     title: 'Cello Colorup Kit',
//     subtitle: '(Gold Nib) Fountain Pen',
//     description: ' Body Color: Gold, Made of Gold Plated, Ink Color: Blue',

//     reviews: 75,
//     offers: 20,
//     rating : 4.5,
//     price: 18,

//     favorite: 'favorite_border',
//     button_btn: 'Buy'
//   },

//   { 
//     image: '../../../../../assets/product4.png',
//     title: 'School Bag Canvas with Art Kit',
//     subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
//     description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

//     reviews: 75,
//     offers: 5,
//     rating : 4.5,
//     price: 150,

//     favorite: 'favorite_border',
//     button_btn: 'Buy'
//   },

//   // { 
//   //   image: '../../../../../assets/product6.png',
//   //   title: 'School Bag Canvas with Art Kit',
//   //   subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
//   //   description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

//   //   reviews: 75,
//   //   offers: 5,
//   //   rating : 4.5,
//   //   price: 150,

//   //   favorite: 'favorite_border',
//   //   button_btn: 'Bye'
//   // },

//   // { 
//   //   image: '../../../../../assets/product7.png',
//   //   title: 'School Bag Canvas with Art Kit',
//   //   subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
//   //   description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

//   //   reviews: 75,
//   //   offers: 5,
//   //   rating : 4.5,
//   //   price: 150,

//   //   favorite: 'favorite_border',
//   //   button_btn: 'Bye'
//   // },

//   // { 
//   //   image: '../../../../../assets/product8.png',
//   //   title: 'School Bag Canvas with Art Kit',
//   //   subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
//   //   description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

//   //   reviews: 75,
//   //   offers: 5,
//   //   rating : 4.5,
//   //   price: 150,

//   //   favorite: 'favorite_border',
//   //   button_btn: 'Bye'
//   // },

  
//   // { 
//   //   image: '../../../../../assets/product3.png',
//   //   title: 'School Bag Canvas with Art Kit',
//   //   subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
//   //   description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

//   //   reviews: 75,
//   //   offers: 5,
//   //   rating : 4.5,
//   //   price: 150,

//   //   favorite: 'favorite_border',
//   //   button_btn: 'Bye'
//   // },

//   // { 
//   //   image: '../../../../../assets/product1.png',
//   //   title: 'School Bag Canvas with Art Kit',
//   //   subtitle: 'Bag of Assorted Stationery Crayons , Sketch Pens.',
//   //   description: ' Oil Pastel, Gel pens, Mechanical Pencils, Clay with Kids Activity Book inside',

//   //   reviews: 75,
//   //   offers: 5,
//   //   rating : 4.5,
//   //   price: 150,

//   //   favorite: 'favorite_border',
//   //   button_btn: 'Bye'
//   // },
// ];

// @Component({
//   selector: 'app-favorites',
//   templateUrl: './favorites.component.html',
//   styleUrls: ['./favorites.component.scss']
// })
// export class FavoritesComponent implements OnInit {

//   listDatas = ProductData;

//   constructor() { }

//   ngOnInit(): void {
//   }

// }












import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

    displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
    dataSource: MatTableDataSource<UserData>;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor() {
      // Create 100 users
      const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
  
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);
    }  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
  
  /** Builds and returns a new User. */
  function createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
  
    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };

}












// import {AfterViewInit, Component, ViewChild} from '@angular/core';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatSort} from '@angular/material/sort';
// import {MatTableDataSource} from '@angular/material/table';

// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   fruit: string;
// }

// /** Constants used to fill up our data base. */
// const FRUITS: string[] = [
//   'blueberry',
//   'lychee',
//   'kiwi',
//   'mango',
//   'peach',
//   'lime',
//   'pomegranate',
//   'pineapple',
// ];
// const NAMES: string[] = [
//   'Maia',
//   'Asher',
//   'Olivia',
//   'Atticus',
//   'Amelia',
//   'Jack',
//   'Charlotte',
//   'Theodore',
//   'Isla',
//   'Oliver',
//   'Isabella',
//   'Jasper',
//   'Cora',
//   'Levi',
//   'Violet',
//   'Arthur',
//   'Mia',
//   'Thomas',
//   'Elizabeth',
// ];

// /**
//  * @title Data table with sorting, pagination, and filtering.
//  */
// @Component({
//   selector: 'table-overview-example',
//   styleUrls: ['table-overview-example.css'],
//   templateUrl: 'table-overview-example.html',
// })
// export class FavoritesComponent implements AfterViewInit {
//   displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
//   dataSource: MatTableDataSource<UserData>;

//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;

//   constructor() {
//     // Create 100 users
//     const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

//     // Assign the data to the data source for the table to render
//     this.dataSource = new MatTableDataSource(users);
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }

// /** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }