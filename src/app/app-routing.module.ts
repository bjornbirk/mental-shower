import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { StatsComponent } from './stats/stats.component';
import { SurveyComponent } from './survey/survey.component';
import { DidyouknowComponent } from './didyouknow/didyouknow.component';
import { CardgameComponent } from './cardgame/cardgame.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home/:id', component: HomePage
  },
  {
    path:'stats', component: StatsComponent
  },
  {
    path:'didyouknow', component: DidyouknowComponent
  },
  {
    path:'cardgame', component: CardgameComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
