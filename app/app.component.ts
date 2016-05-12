import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HeroService } from './services/hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { ButtonDemoComponent } from './directive/button/button-demo.component';

@Component({
  selector: 'my-app',
 templateUrl: 'app/app.component.html',
 directives: [ROUTER_DIRECTIVES, ButtonDemoComponent],
  providers: [ROUTER_PROVIDERS, HeroService],
  styleUrls: ['app/app.component.css']
})

@RouteConfig([
{
  path: '/heroes',
  name: 'Heroes',
  component: HeroesComponent,
},
{
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  useAsDefault: true
},
{
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
}
])


export class AppComponent {
  title = 'Tour of Heroes';
}
