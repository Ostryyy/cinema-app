import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit, OnDestroy {
  movies?: Movie[];
  subscription?: Subscription;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit() {
    this.subscription = this.movieService.moviesChanged
      .subscribe(
        (movies: Movie[]) => {
          this.movies = movies;
        }
      );
    this.movies = this.movieService.getMovies();
  }

  onAddMovie() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  onDelete(index: number) {
    this.movieService.deleteMovie(index);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
