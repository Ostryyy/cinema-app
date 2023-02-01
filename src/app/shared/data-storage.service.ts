import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../cinema/movies/movie.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  url =
    'https://cinemareservation-86c0d-default-rtdb.firebaseio.com/movies.json';

  constructor(private http: HttpClient) {}

  saveMovies(movies: Movie[]) {
    return this.http.put(this.url, movies);
  }

  fetchMovies() {
    return this.http.get<Movie[]>(this.url);
  }
}
