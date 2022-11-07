import { Component, OnInit } from '@angular/core';
import {JarvisService} from "../../Services/jarvis.service";
import {Router} from "@angular/router";
import {ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-category-movies',
  templateUrl: './category-movies.component.html',
  styleUrls: ['./category-movies.component.css']
})
export class CategoryMoviesComponent implements OnInit {

  constructor(private jarvis:JarvisService,private route:Router,private router:ActivatedRoute) { }
  public error = null;
  public categoryMovies = [];
  getCategoryMovies(id)
  {
    this.jarvis.categoryMovies(id).subscribe(
      data=>this.handleResponse(data),
      error=> this.handleError(error)
    );
  }
  handleResponse(data)
  {
    this.categoryMovies = data;
    console.log(this.categoryMovies);
  }
  handleError(error)
  {
    this.error = error;
  }
  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.getCategoryMovies(id);
  }

}
