import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  // selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    // heroService 인자를 클래스 프로퍼티로 선언하면서 HeroService 타입의 의존성 객체가 주입되기를 요청한다는 것을 의미합니다.
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  // 서비스의 함수가 Observable 타입을 반환하는데,
  //반환 시점은 함수를 실행한 직후일 수도 있고 몇 분이 지난 후일 수도 있습니다.
  //서버의 응답이 언제 도착하는지와 관계없이,
  //이 응답이 도착했을 때 subscribe가 서버에서 받은 응답을 콜백 함수로 전달하고,
  //컴포넌트는 이렇게 받은 히어로 데이터를 heroes 프로퍼티에 할당합니다.
}
