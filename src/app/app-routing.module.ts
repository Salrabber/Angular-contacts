import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {path: '', component: UsersPageComponent},
  {path: 'profile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
