import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import {JarvisService} from "./Services/jarvis.service";
import {TokenService} from "./Services/token.service";
import {AuthService} from "./Services/auth.service";
import {AfterLoginService} from "./Services/after-login.service";
import {BeforeLoginService} from "./Services/before-login.service";
import { MovieComponent } from './components/movie/create/movie.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryMoviesComponent } from './components/category-movies/category-movies.component';
import { EditComponent } from './components/movie/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    MovieComponent,
    CategoriesComponent,
    CategoryMoviesComponent,
    EditComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [JarvisService,TokenService,AuthService,AfterLoginService,BeforeLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
