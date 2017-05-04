import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
/**
 * Created by rajat.khare on 04/05/17.
 */
@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShoppingListModule {}
