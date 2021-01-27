import { Component, OnInit } from '@angular/core';
import { animation, keyframes, useAnimation } from '@angular/animations';
import { trigger,state,style,animate,transition } from "@angular/animations"
import { ejemplo, ejemploTrigger, slideInAnimation } from "../../Animations/animations";

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.component.html',
  styleUrls: ['./figuras.component.css'],
  animations: [
    slideInAnimation, ejemploTrigger,

    // trigger('openClose', [
    //   state('open', style({
    //     opacity: 0.5,
    //     backgroundColor: 'green'
    //   })),
    //   state('close', style({
    //     opacity: 0.8,
    //     backgroundColor: 'red',
    //     color: 'white'
    //   })),
    //   transition('open => close', [
    //     useAnimation(ejemplo, {
    //       params: {
    //         height: '50px',
    //         opacity: '1',
    //         backgroundColor: 'red',
    //         time: '2s cubic-bezier(.075, 0.82, 0.165, 1)'
    //       }
    //     })
    //   ])
    // ]),
    // trigger('openClose', [
    //   state('open', style({
    //     opacity: 0.5,
    //     backgroundColor: 'green'
    //   })),
    //   state('close', style({
    //     opacity: 0.8,
    //     backgroundColor: 'red',
    //     color: 'white'
    //   })),
    //   transition('open => close', [
    //     animate(600)
    //   ]),
    //   transition('close => open' , [
    //     animate(2000, keyframes([
    //       style({backgroundColor: 'yellow', offset:0.25}),
    //       style({backgroundColor: 'blue', offset:0.8}),
    //       style({backgroundColor: 'green', offset:0.9}),
    //       style({backgroundColor: 'orange', offset:1.0}),
    //     ]))
    //   ])
    // ]),

    trigger('cambioForma',[
      state('cuadro', style({
        backgroundColor: 'brown',
        borderRadius : '5%',
      })),
      state('circulo', style({
        backgroundColor: 'green',
        borderRadius: '50%',
      })),
      // state('in', style({
      //   transform:'translateX(-100)'
      // })),
      transition('cuadro <=> circulo', [
        animate('3s cubic-bezier(.075, 0.82, 0.165, 1)')
      ]),
      // transition(':enter', [
      //   animate(2000,
      //     style({transform: 'translateX(1000%)', opacity: 1}))
      // ]),
      // transition(':leave', [
      //   animate(20,
      //     style({transform: 'translateY(1000%)', opacity: '0'}))
      // ]),
      // transition('void <=> *', [
      //   animate(2000,
      //     style({transform: 'translateX(100%)', opacity: '0'}))
      // ])
    ]),

    trigger('myInsertRemoveTrigger', [
      transition(':enter' , [
        style({opacity: 0}),
        animate(100, style({ opacity:1}))
      ]),
      transition(':leave', [
        animate(100, style({opacity:0}))
      ])
    ])
  ]
})
export class FigurasComponent implements OnInit {

  isOpen = true
  estadoFigura = true

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen
  }

  animar() {
    this.estadoFigura = !this.estadoFigura //=== 'cuadro' ? 'circulo' : 'cuadro'
  }

}
