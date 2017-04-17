import {Directive, HostListener, HostBinding} from "@angular/core";
/**
 * Created by rajat on 16-Apr-17.
 */
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open') isOpen: boolean = false;
@HostListener('click') toggleOpen() {
this.isOpen = !this.isOpen;
}
}
