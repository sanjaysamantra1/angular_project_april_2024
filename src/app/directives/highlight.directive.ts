import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private ele: ElementRef) {
    console.log(ele);
  }

  highLight(color: string, bgColor: string) {
    this.ele.nativeElement.style.color = color;
    this.ele.nativeElement.style.backgroundColor = bgColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highLight('red', 'yellow')
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highLight('black', 'white')
  }

}
