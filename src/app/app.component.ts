import { animation } from '@angular/animations';
import { Component } from '@angular/core';
import { trigger,state,style,animate,transition } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
     trigger('openClose', [
       state('open', style({
         height: '250px',
         opacity: 1,
         backgroundColor: 'green'
       })),
       state('close', style({
         height: '150px',
         opacity: 0.5,
         backgroundColor: 'red'
       })),
       transition('open => closed', [
         animate(6000)
       ]),
       transition('close => open' , [
         animate(300)
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
