import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[dropdownDirective]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  // @HostListener('click') toggleOpen(){
  //     this.isOpen=!this.isOpen;
  // }

  // @HostListener('document:click',['$event']'') togglee(event:Event)
  @HostListener('document:click', ['$event']) togglee(event: Event) {
    console.log(['$event']);
    console.log(event);

    this.isOpen = this.eleref.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
//   @HostListener('click', ['$event'])
//   onClick(event: MouseEvent) {
//     console.log('Clicked!', event.clientX, event.clientY);
//   }
  constructor(private eleref: ElementRef) {}
}