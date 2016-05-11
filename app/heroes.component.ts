import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './classes/hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './services/hero.service';

@Component({
	selector: 'my-heroes',
	template:  `
	<h2>My heroes</h2>
	<ul class="heroes">
	<li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
	<span class="badge">{{hero.id}}</span> {{hero.name}}
	</li>
	</ul>
	<div *ngIf="selectedHero">
	<h2>
	{{selectedHero.name | uppercase}} is my hero
	</h2>
	<button (click)="gotoDetail()">View Details</button>
	</div>
	`, //properties from app component, one-wat data binding
	styleUrls:  ['app/heroes.component.css'],
	directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit { 
	title = 'Tour of Heroes';
	selectedHero: Hero;
	heroes: Hero[];

	constructor(
		private router: Router,
		private heroService: HeroService) { }

	getHeroes() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) { this.selectedHero = hero; }

	gotoDetail() {
		this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
}

