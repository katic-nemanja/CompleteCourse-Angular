import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  renderer: Renderer2;
  elementSelected: ElementRef;

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'lightblue';

  constructor(elementSelected: ElementRef, renderer: Renderer2) {
    this.renderer = renderer;
    this.elementSelected = elementSelected;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.marginTop') marginTop: string = '30px';
  @HostBinding('style.paddingTop') paddingTop: string = '15px';
  @HostBinding('style.paddingBottom') paddingBottom: string = '15px';
  @HostBinding('style.paddingLeft') paddingLeft: string = '15px';

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementSelected.nativeElement, 'backgroundColor', 'lightgreen');
    // this.renderer.setStyle(this.elementSelected.nativeElement, 'margin', '30px');
    // this.renderer.setStyle(this.elementSelected.nativeElement, 'padding', '30px');

  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementSelected.nativeElement, 'backgroundColor', 'lightblue');
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elementSelected.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementSelected.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('window:keydown.enter', ['$event']) handleEnterDown(event: KeyboardEvent) {
    this.renderer.setStyle(this.elementSelected.nativeElement, 'color', 'red');
    this.backgroundColor = 'orange';
  }

  @HostListener('window:keydown.space', ['$event']) handleSpaceDown(event: KeyboardEvent) {
    this.renderer.setStyle(this.elementSelected.nativeElement, 'color', 'blue');
    this.backgroundColor = 'pink';
  }

  @HostListener('window:keydown.backspace', ['$event']) handleBackSpaceDown(event: KeyboardEvent) {
    this.renderer.setStyle(this.elementSelected.nativeElement, 'color', 'black');
    this.backgroundColor = this.highlightColor;
  }

}
