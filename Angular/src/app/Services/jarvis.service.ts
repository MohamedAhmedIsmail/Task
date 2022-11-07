import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JarvisService {

  private baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  signup(data)
  {
    return this.http.post(`${this.baseUrl}/signup`,data);
  }

  login(data)
  {
    return this.http.post(`${this.baseUrl}/login`,data);
  }
  movies()
  {
    return this.http.get(`${this.baseUrl}/movies/list`);
  }
  getMovie(id)
  {
    return this.http.get(`${this.baseUrl}/movies/edit/`+id);
  }
  addMovie(data)
  {
    return this.http.post(`${this.baseUrl}/movies/add`,data);
  }
  editMovie(data)
  {
    return this.http.get(`${this.baseUrl}/movies/edit/`+data);
  }
  updateMovie(data,id)
  {
    return this.http.post(`${this.baseUrl}/movies/update/`+id,data);
  }
  deleteMovie(data)
  {
    return this.http.post(`${this.baseUrl}/movies/delete/`+data,data);
  }
  categories()
  {
    return this.http.get(`${this.baseUrl}/categories/list`);
  }
  categoryMovies(id)
  {
    return this.http.get(`${this.baseUrl}/movies/list/`+id);
  }
}
