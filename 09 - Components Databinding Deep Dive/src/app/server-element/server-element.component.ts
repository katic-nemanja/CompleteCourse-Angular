import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() serverElements!: { type: string, name: string, content: string };
  @Input() name!: string;
  @ViewChild('heading') heading: ElementRef;
  @ContentChild('contentParagraph') paragraf: ElementRef;

  constructor() {
    console.log('konstruktor je pozvan');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges je ispaljen');
    console.log(changes);


  }

  ngOnInit(): void {
    console.log('ngOnInit je pozvan');
    // console.log('Content: ' + this.paragraf.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('DoCheck je ispaljen!');

  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit je ispaljen!!!');
    // console.log('Text: ' + this.heading.nativeElement.textContent);
    console.log('Content: ' + this.paragraf.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked je ispaljen!!!');

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit je ispaljen!!!');
    console.log('Text: ' + this.heading.nativeElement.textContent);
    console.log('Content: ' + this.paragraf.nativeElement.textContent);

  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked je ispaljen!!!');

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy je ispaljen!!!');

  }


}
