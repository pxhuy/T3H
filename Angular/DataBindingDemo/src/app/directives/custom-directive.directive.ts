import { Directive } from '@angular/core';
import {ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  @Input('appCustomDirective') level:string;
  constructor(private el: ElementRef,private color:string) {

    switch (this.level)
    {
      case 'Error': color = 'red' ; break;
      case 'info': color = 'red' ; break;
      case 'warning': color = 'red' ; break;
      default:
        color:'black';
      break;
    }
    this.el.nativeElement.style.backgroundColor = 'red';
   }

   @HostListener('mouseenter') onmouseenter() {
     this.el.nativeElement.style.backgroundColor = 'blue';
   }

   @HostListener('mouseleave') onmouseleave(){
     this.el.nativeElement.style.backgroundColor = 'green';
   }

}

