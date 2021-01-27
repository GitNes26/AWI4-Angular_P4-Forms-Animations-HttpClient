import { animation,trigger,state,style,transition,animate, keyframes, animateChild, group, query } from "@angular/animations";

export const transAnimation = animation([
    style({
        height: 100,
        opacity: 0.5,
        backgroundColor: 'red'
    }),
    animate(600)
]);

export const ejemploTrigger = 
    trigger('openClose', [
        state('open', style({
            opacity: 0.5,
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
    ]);

export const ejemplo = animation([
    style({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
]);

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);