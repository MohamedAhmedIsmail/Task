import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {BeforeLoginService} from "./Services/before-login.service";
import {AfterLoginService} from "./Services/after-login.service";
import {MovieComponent} from "./components/movie/create/movie.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {CategoryMoviesComponent} from "./components/category-movies/category-movies.component";
import {EditComponent} from "./components/movie/edit/edit.component";

const appRoutes: Routes = [

  {
      path:'login',
      component: LoginComponent,
      canActivate: [BeforeLoginService]
    },
    {
      path:'signup',
      component: SignupComponent,
      canActivate: [BeforeLoginService]
    },
    {
      path:'profile',
      component: ProfileComponent,
      canActivate: [AfterLoginService]
    },
  {
    path:'addMovie',
    component: MovieComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'profile/edit/:id',
    component: EditComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'categories',
    component: CategoriesComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'categories/movies/:id',
    component: CategoryMoviesComponent,
    canActivate: [AfterLoginService]
  },
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
