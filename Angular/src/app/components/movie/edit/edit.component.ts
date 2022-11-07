import { Component, OnInit } from '@angular/core';
import {JarvisService} from "../../../Services/jarvis.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public error = null;
  public categories = [];
  public form = {
    title:null,
    rate:null,
    description:null,
    category_id:null
  };
  public id = null;
  constructor(private jarvis:JarvisService , private router:Router ,private route:ActivatedRoute) { }

  onSubmit(){
    this.jarvis.updateMovie(this.form,this.id).subscribe(
      error=> this.handleError(error)
    );
    this.router.navigateByUrl('/profile');
  }

  getMovie(id)
  {
    this.jarvis.getMovie(id).subscribe(
      data=>this.handleResponse(data),
      error=> this.handleError(error)
    );
  }
  handleResponse(data)
  {
    this.form=data['movie'];
    console.log(this.form);
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
  }
  handleError(error)
  {
    this.error = error;
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMovie(this.id);
    this.getCategories();
  }


}
