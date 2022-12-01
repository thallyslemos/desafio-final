import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate,
} from '@angular/animations';


export const slideInAnimation = trigger('routeAnimations', [
  transition('DashboardPage => HomePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('HomePage => DashboardPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        opacity: '100%',
      }),
    ]),
    query(':enter', [style({ right: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ right: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ right: '0%' }))]),
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
        width: '100%',
        opacity: '100%',
        transition: '200ms'
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('400ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
