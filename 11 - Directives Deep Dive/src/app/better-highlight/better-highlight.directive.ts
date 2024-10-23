import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  renderer: Renderer2;
  elementSelected: ElementRef;
  constructor(elementSelected: ElementRef, renderer: Renderer2) {
    this.renderer = renderer;
    this.elementSelected = elementSelected;
  }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementSelected.nativeElement, 'backgroundColor', 'lightgreen');
    this.renderer.setStyle(this.elementSelected.nativeElement, 'margin', '30px');
    this.renderer.setStyle(this.elementSelected.nativeElement, 'padding', '30px');

  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementSelected.nativeElement, 'backgroundColor', 'lightblue');
    this.renderer.setStyle(this.elementSelected.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementSelected.nativeElement, 'backgroundColor', 'transparent');
  }

}
