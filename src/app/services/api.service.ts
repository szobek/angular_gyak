import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movie';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
url = {
  base:'http://localhost:3000',
  api:'api'
}
  constructor(private http: HttpClient) { }

   fetchSeries() {
    return this.http.get<Movie[ ]>(`${this.url.base}/${this.url.api}`)
  }
}

