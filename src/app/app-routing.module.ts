import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MatchesComponent } from './matches/matches.component';
import { PersonComponent } from './person/person.component';
import { PlayerComponent } from './player/player.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'board', component: BoardComponent, canActivate: [RouteGuardService]},
  { path: 'players', component: PlayerComponent, canActivate: [RouteGuardService]},
  { path: 'players/:id', component: PersonComponent, canActivate: [RouteGuardService]},
  { path: 'matches', component: MatchesComponent, canActivate: [RouteGuardService]},
  { path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
