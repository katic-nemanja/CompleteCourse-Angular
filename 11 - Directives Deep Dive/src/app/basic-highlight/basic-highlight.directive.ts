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
        this.elementSelected.nativeElement.style.margin = '20px 0 20px 0';
        this.elementSelected.nativeElement.style.padding = '20px';
    }
}