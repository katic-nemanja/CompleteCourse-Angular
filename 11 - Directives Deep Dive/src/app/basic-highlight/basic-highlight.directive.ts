import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

    elementSelected: ElementRef;

    constructor(elementSelected: ElementRef) {
        this.elementSelected = elementSelected;
    }

    ngOnInit(): void {
        this.elementSelected.nativeElement.style.backgroundColor = 'lightblue';
        this.elementSelected.nativeElement.style.marginTop = '20px';
        this.elementSelected.nativeElement.style.paddingTop = '20px';
    }
}