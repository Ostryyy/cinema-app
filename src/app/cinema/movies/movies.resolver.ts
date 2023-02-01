import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<Movie[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private movieService: MovieService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const movies = this.movieService.getMovies();

    if (movies.length === 0) {
      return this.dataStorageService.fetchMovies();
    } else {
      return movies;
    }
  }
}
