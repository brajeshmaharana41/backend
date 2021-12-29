// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { map, mergeMap } from "rxjs/operators";
// import { CategoryServices } from "../services/category.services";
// import { loadData } from "./product.action";

// @Injectable()
// export class CategoryEffects {
//     constructor (private actions$: Actions, private categoryservice: CategoryServices) {}

//     loadData$ = createEffect (() =>{
//         return this.actions$.pipe(ofType(loadData),
//             mergeMap((action) => {
//                 return this.categoryservice.getcategory().pipe(
//                     map((deta) => {
//                         console.log(deta);  
//                     })
//                 );
//             })
//         );
//     }, { dispatch: false });
// }