import { Component, OnInit } from '@angular/core';
import {JarvisService} from "../../Services/jarvis.service";
import {TokenService} from "../../Services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email:null,
    password:null,
    password_confirmation:null,
    name:null,
    birthdate:null
  };
  public error = [];
  constructor(private jarvis:JarvisService,private token:TokenService,private router:Router) { }

  onSubmit(){
    this.jarvis.signup(this.form).subscribe(
      data=>this.handleResponse(data),
      error=> this.handleError(error)
    );
  }
  handleError(error){
    this.error = error.error.errors;
  }
  handleResponse(data)
  {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }
  ngOnInit(): void {
  }

}
