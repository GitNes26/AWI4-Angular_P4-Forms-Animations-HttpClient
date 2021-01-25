import { animation, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { trigger,state,style,animate,transition } from "@angular/animations"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
     trigger('openClose', [
       state('open', style({
         opacity: 1,
         backgroundColor: 'green'
       })),
       state('close', style({
         opacity: 0.8,
         backgroundColor: 'red',
         color: 'white'
       })),
       transition('open => close', [
         animate(600)
       ]),
       transition('close => open' , [
         animate(2000, keyframes([
           style({backgroundColor: 'yellow', offset:0.25}),
           style({backgroundColor: 'blue', offset:0.8}),
           style({backgroundColor: 'green', offset:0.9}),
           style({backgroundColor: 'orange', offset:1.0}),
         ]))
       ])
     ])
  ]
})

export class AppComponent {
  isOpen = true
  title = 'P4-Forms-Animations-HttpClient';

  toggle() {
    this.isOpen = !this.isOpen
  }
}
