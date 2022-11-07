import { Component, OnInit } from '@angular/core';
import {JarvisService} from "../../Services/jarvis.service";
import {TokenService} from "../../Services/token.service";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email:null,
    password:null
  };
  public error = null;
  constructor(private jarvis:JarvisService,private token:TokenService,private router:Router,private auth:AuthService) { }

  onSubmit(){
    this.jarvis.login(this.form).subscribe(
      data=>this.handleResponse(data),
      error=> this.handleError(error)
    );
  }
  handleError(error){
    this.error = error.error.error;
  }
  handleResponse(data)
  {
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }
  ngOnInit(): void {
  }

}
