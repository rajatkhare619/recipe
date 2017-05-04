import {NgModule} from "@angular/core";
import {DropdownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";
/**
 * Created by rajat.khare on 04/05/17.
 */
@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective
  ]
})
export class SharedModule {}
