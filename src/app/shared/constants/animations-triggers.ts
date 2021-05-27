import { animate, animation, group, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const CUBIC_BEZIER_EASE = `cubic-bezier(0.35, 0, 0.25, 1)`;

export const SMOOTH_COLLAPSIBLE = trigger('openClose', [
  state('open', style({
    height: '200px',
    color: 'black',
    backgroundColor: 'yellow'
  })),
  state('closed', style({
    height: '100px',
    color: 'lightgray',
    backgroundColor: 'green'
  })),
  transition('open <=> closed', [
    animate('0.25s')
  ]),
]);

export const ENTER_FROM_BOTTOM = trigger('flyInOut', [
  state('in', style({
    transform: 'translateX(0)',
    opacity: 0
  })),
  transition('void => *', [
    style({
      transform: 'translateY(200%)',
      opacity: 0
    }),
    animate('0.25s ease-in')
  ]),
  transition('* => void', [
    animate('0.25s ease-in',
      style({
        transform: 'translateY(-100%)',
        opacity: 0
      }))
  ])
]);

export const APPEAR_DISAPPEAR = trigger('flyInOut', [
  transition(':enter', [
    style({opacity: 0}),
    animate('100ms', style({opacity: 1})),
  ]),
  transition(':leave', [
    animate('100ms', style({opacity: 0}))
  ])
]);

export const BOOLEAN_OPEN_CLOSE = trigger('openClose', [
  state('true', style({height: '*'})),
  state('false', style({height: '0px'})),
  transition('false <=> true', animate(500))
]);

export const MULTI_COLOR_CHANGE = trigger('multiColorChange', [
  state('active', style({backgroundColor: 'orange'})),
  state('inactive', style({backgroundColor: 'blue'})),
  transition('inactive => active', [
    animate('2s', keyframes([
      style({backgroundColor: 'blue', offset: 0}),
      style({backgroundColor: 'red', offset: 0.8}),
      style({backgroundColor: 'orange', offset: 1.0})
    ])),
  ]),
  transition('active => inactive', [
    animate('2s', keyframes([
      style({backgroundColor: 'orange', offset: 0}),
      style({backgroundColor: 'red', offset: 0.2}),
      style({backgroundColor: 'blue', offset: 1.0})
    ]))
  ]),
]);

export const PULSE = trigger('pulse', [
  state('open', style({
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow'
  })),
  state('close', style({
    height: '100px',
    opacity: 0.5,
    backgroundColor: 'green'
  })),
  transition('* => *', [
    animate('1s', keyframes([
      style({opacity: 0.1, offset: 0.1}),
      style({opacity: 0.6, offset: 0.2}),
      style({opacity: 1, offset: 0.5}),
      style({opacity: 0.2, offset: 0.7})
    ]))
  ])
]);

export const STRIKE_THROUGH = trigger('shrinkOut', [
  state('in', style({height: '*'})),
  transition('* => void', [
    style({height: '*'}),
    animate(1000, style({height: 0}))
  ])
]);

export const ENTRANCE_PARAMS = {
  startY: -100,
  endY: 0,
  startOpacity: 0,
  endOpacity: 1,
  staggerTime: -100,
  animationTime: 750
};
export const SMOOTH_ENTRANCE = (params = ENTRANCE_PARAMS) => trigger('pageAnimations', [
  transition('* <=> *', [
    query(':enter', [
      style({opacity: params.startOpacity, transform: `translateY(${params.startY}px)`}),
      stagger(params.staggerTime, [
        animate(`${params.animationTime}ms ${CUBIC_BEZIER_EASE}`, style({opacity: params.endOpacity, transform: `translateY(${params.endY}px)`})),
      ])
    ], {optional: true})
  ])
]);

export const SMOOTH_ENTRANCE_2 = ({elements} = {elements: '.hero, form'} ) => trigger('pageAnimations', [
  transition(':enter', [
    query(elements, [
      style({opacity: 0, transform: 'translateY(-100px)'}),
      stagger(-100, [
        animate(`600ms ${CUBIC_BEZIER_EASE}`, style({opacity: 1, transform: 'translateY(0)'})),
      ])
    ], {optional: true})
  ])
]);

export const SMOOTH_ENTRANCE_3 = trigger('pageAnimations', [
  transition(':enter', [
    query('.hero, form', [
      style({opacity: 0, transform: 'translateY(-5000px)'}),
      stagger(-30, [
        animate(`750ms ${CUBIC_BEZIER_EASE}`, style({opacity: 0.25, transform: 'translateY(10px)'})),
        animate(`100ms ${CUBIC_BEZIER_EASE}`, style({opacity: 1, transform: 'translateY(0)'}))
      ])
    ])
  ])
]);

export const SMOOTH_FILTER_1 = trigger('filterAnimation', [
  transition(':enter, * => 0, * => -1', []),
  transition(':increment', [
    query(':enter', [
        style({opacity: 0, width: '0px'}),
        stagger(50, [
          animate('300ms ease-out', style({opacity: 1, width: '*'}))
        ])
      ],
      {optional: true}
    )
  ]),
  transition(':decrement', [
    query(':leave', [
      stagger(50, [
        animate('300ms ease-out', style({opacity: 0, width: '0px'}))
      ])
    ])
  ])
]);

export const SMOOTH_FILTER_2 = trigger('filterAnimation', [
  transition(':enter, * => 0, * => -1', []),
  transition(':increment', [
    query(':enter', [
      style({opacity: 0, transform: 'translateX(-1000px)'}),
      stagger(50, [
        animate('300ms ease-out', style({opacity: 1, transform: 'translateX(0)'})),
      ]),
    ], {optional: true})
  ]),
  transition(':decrement', [
    query(':leave', [
      stagger(50, [
        animate('300ms ease-out', style({opacity: 0, transform: 'translateX(1000px)'})),
      ]),
    ])
  ]),
]);

export const GROUPING = trigger('flyInOut', [
  state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
  transition('void => *', [
    style({width: 10, transform: 'translateX(50px)', opacity: 0}),
    group([
      animate('0.3s 0.1s ease', style({transform: 'translateX(0)', width: 120})),
      animate('0.3s ease', style({opacity: 1}))
    ])
  ]),
  transition('* => void', [
    group([
      animate('0.3s ease', style({transform: 'translateX(50px)', width: 10})),
      animate('0.3s 0.2s ease', style({opacity: 0}))
    ])
  ])
]);
