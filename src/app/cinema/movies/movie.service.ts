import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private url: string = environment.databaseUrl;

  moviesChanged = new Subject<Movie[]>();

  movies: Movie[] = [];

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.movies.slice();
  }

  getMovie(index?: number) {
    return this.movies[index!];
  }

  setMovies(movies: Movie[]) {
    this.movies = movies;
    this.moviesChanged.next(this.movies.slice());
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
    this.moviesChanged.next(this.movies.slice());
  }

  updateMovie(index: number, newMovie: Movie) {
    this.movies[index] = newMovie;
    this.moviesChanged.next(this.movies.slice());
  }

  deleteMovie(index: number) {
    this.movies.splice(index, 1);
    this.moviesChanged.next(this.movies.slice());
  }
}
