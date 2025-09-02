import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ImageBorder]',
  standalone: true
})
export class ImageBorderDirective implements  OnChanges {

  @Input() defaultColor: string = 'pink';
  @Input('ImageBorder') myColor: string = 'gold';

  constructor(public eleRef: ElementRef) { }

  ngOnChanges() {
    this.eleRef.nativeElement.style.border = `5px solid ${this.defaultColor}`;
    this.eleRef.nativeElement.style.transform = 'scale(1)';
  }


  @HostListener('mouseover') functionOne() {
    this.eleRef.nativeElement.style.border = `8px solid ${this.myColor}` ;
    this.eleRef.nativeElement.style.transform = 'scale(1.1)';
  }

  @HostListener('mouseout') functionTwo() {
    this.eleRef.nativeElement.style.border = `5px solid ${this.defaultColor}`;
    this.eleRef.nativeElement.style.transform = 'scale(1)';
  }


}
