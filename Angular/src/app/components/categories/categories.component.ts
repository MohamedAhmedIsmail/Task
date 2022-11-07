import { Component, OnInit } from '@angular/core';
import {JarvisService} from "../../Services/jarvis.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private jarvis:JarvisService,private route:Router) { }
  public error = null;
  public categories = [];

  getCategories()
  {
    this.jarvis.categories().subscribe(
      data=>this.handleResponse(data),
      error=> this.handleError(error)
    );
  }
  handleResponse(data)
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
