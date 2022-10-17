import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class HidingDirective {

  constructor(private el: ElementRef) { 
  }

  @HostListener('mouseenter') mouseover(){
    this.el.nativeElement.style.display = 'none';
  }
  
}
