import { Injectable } from '@angular/core';
import { Hero } from './../classes/hero';
import { HEROES } from './../data/mock-heroes';

@Injectable()
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve => setTimeout(()=>resolve(HEROES), 2000) );
	}

	getHero(id: number) {
		return Promise.resolve(HEROES).then(
			heroes => heroes.filter(hero => hero.id === id)[0]
			);
	}

}
