import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorComponent } from './components/error/error.component';


import { FollowingComponent } from './components/following/following.component';
import { FollowedComponent } from './components/followed/followed.component';

import { UserGuard } from './services/user.guard';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'account', component: UserEditComponent, canActivate:[UserGuard]},
  {path: 'people', component: UsersComponent, canActivate:[UserGuard]},
  {path: 'people/:page', component: UsersComponent, canActivate:[UserGuard]},
  {path: 'profile/:id', component: ProfileComponent, canActivate:[UserGuard]},
  {path: 'following/:id/:page', component: FollowingComponent, canActivate:[UserGuard]},
  {path: 'followers/:id/:page', component: FollowedComponent,canActivate:[UserGuard]},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
