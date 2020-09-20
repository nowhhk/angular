import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //이 라우팅 규칙은 브라우저의 URL이 빈 문자열일 때 '/dashboard' 주소로 이동하도록 설정한 것입니다.
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //애플리케이션 최상위 계층에 존재하는 라우터를 설정할 때는 forRoot() 메소드를 사용합니다. forRoot() 메소드를 사용하면 라우팅과 관련된 서비스 프로바이더와 디렉티브를 애플리케이션에 제공할 수 있으며, 브라우저에서 변경되는 URL을 감지할 수 있습니다.
  exports: [RouterModule],
})
export class AppRoutingModule {}
