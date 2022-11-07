import { Component, OnInit } from '@angular/core';
import {JarvisService} from "../../Services/jarvis.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private jarvis:JarvisService,private route:Router) { }
  public error = null;
  public movies = [];
  getMovies()
  {
    this.jarvis.movies().subscribe(
      data=>this.handleResponse(data),
      error=> this.handleError(error)
    );
  }
  editMovie(id)
  {
    this.jarvis.editMovie(id).subscribe(
      data=>this.handleEditResponse(data),
      error=> this.handleError(error)
    );
  }
  deleteMovie(id)
  {
    this.jarvis.deleteMovie(id).subscribe(
      error=> this.handleError(error)
    );
    location.reload();
  }
  handleEditResponse(data)
  {

  }
  handleResponse(data)
  {
    this.movies = data;
    console.log(this.movies);
  }
  handleError(error)
  {
    this.error = error;
  }
  ngOnInit(): void {
    this.getMovies();
  }

}
