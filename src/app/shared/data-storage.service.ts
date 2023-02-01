import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { Movie } from '../cinema/movies/movie.model';
import { MovieService } from '../cinema/movies/movie.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private url:string = environment.databaseUrl;

  constructor(
    private http: HttpClient,
    private movieService: MovieService,
    private authService: AuthService
  ) {}

  storeMovies() {
    const recipes = this.movieService.getMovies();
    this.http
      .put(
        this.url,
        recipes
      )
  }

  fetchMovies() {
    return this.http
      .get<Movie[]>(
        this.url
      )
      .pipe(
        map(movies => {
          return movies.map(movie => {
            return {
              ...movie
            };
          });
        }),
        tap(movies => {
          this.movieService.setMovies(movies);
        })
      );
  }
}
