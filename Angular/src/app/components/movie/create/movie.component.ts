import { Component, OnInit } from '@angular/core';
import {JarvisService} from "../../../Services/jarvis.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public error = null;
  public categories = [];
  public form = {
    title:null,
  rate:null,
  description:null,
  category_id:null
  };
  constructor(private jarvis:JarvisService , private router:Router) { }

  onSubmit(){
    this.jarvis.addMovie(this.form).subscribe(
      data=>this.handleResponse(data),
      error=> this.handleError(error)
    );
  }
  handleResponse(data)
  {
    this.router.navigateByUrl('/profile');
  }
  getCategories()
  {
    this.jarvis.categories().subscribe(
      data=>this.handleCategoryResponse(data),
      error=> this.handleError(error)
    );
  }
  handleCategoryResponse(data)
  {
    this.categories = data.data;
    console.log(this.categories);
  }
  handleError(error)
  {
    this.error = error;
  }
  ngOnInit(): void {
    this.getCategories();
  }

}
