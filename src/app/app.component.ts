// import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

// import { Component } from '@angular/core';
// import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'ford';
  // loading = false;

  // constructor(private router: Router){
  //   this.router.events.subscribe((event: Event) => {
  //     if (event instanceof NavigationStart) {
  //       this.loading = true;
  //       console.log(this.loading);
  //     }
  //     if (event instanceof NavigationEnd || event instanceof NavigationError) {
  //       this.loading = false;
  //       console.log(this.loading);
  //     }
  //   })
  // }
// }
import {
  Component,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';

const PrimaryBlue = '#0D05F2';
const SecondaryBlue = '#1df2dd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  @ViewChild('customLoadingTemplate', { static: false })
  customLoadingTemplate!: TemplateRef<any>;
  @ViewChild('emptyLoadingTemplate', { static: false })
  emptyLoadingTemplate!: TemplateRef<any>;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;
  public primaryColour = PrimaryBlue;
  public secondaryColour = SecondaryBlue;
  public coloursEnabled = true;
  public loadingTemplate!: TemplateRef<any>;
  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    primaryColour: this.primaryColour,
    secondaryColour: this.secondaryColour,
    tertiaryColour: this.primaryColour,
    backdropBorderRadius: '3px',
  };

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        console.log(this.loading);
      }
      if (event instanceof NavigationEnd || event instanceof NavigationError) {
        this.loading = false;
        console.log(this.loading);
      }
    })
  }

}
