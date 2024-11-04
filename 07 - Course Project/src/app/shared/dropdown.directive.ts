import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  renderer: Renderer2;
  elementSelected: ElementRef;

  //prvi nacin
  counter: number = 1;


  constructor(elementSelected: ElementRef, renderer: Renderer2) {
    this.renderer = renderer;
    this.elementSelected = elementSelected;
  }

  //ako je isOpen varijabla "TRUE" bice dodata clasa open, ako ne, uklonice se
  @HostBinding('class.open') isOpen: boolean = false;

  //prvi nacin
  // @HostListener('click') mouseClick(eventData: Event) {
  //   this.counter++;
  //   if ((this.counter % 2) == 0) {
  //     this.renderer.addClass(this.elementSelected.nativeElement, 'open');
  //   }
  //   else {
  //     this.renderer.removeClass(this.elementSelected.nativeElement, 'open');
  //   }
  // }

  //drugi nacin
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
