import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  //whenever this.isOpen change give its value to css attribute class.open
  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }

  //listen to click event
  @HostListener('click') open(){
    this.isOpen = true;
  }

  @HostListener('mouseleave') close(){
    this.isOpen = false;
  }

  private isOpen = false;

}
