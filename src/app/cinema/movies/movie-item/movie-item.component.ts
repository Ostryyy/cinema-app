import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  movies?: Movie[];

  constructor(
    private movieService: MovieService,
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.onGetMovies()
  }

  onGetMovies() {
    this.dataStorageService.fetchMovies().subscribe(
      (movies) => {
        const data = JSON.stringify(movies);
        this.movies = JSON.parse(data);

        this.movieService.movies = this.movies!;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSaveMovies() {
    this.dataStorageService.saveMovies(this.movies!).subscribe(
      (movies) => {
        const data = JSON.stringify(movies);
        this.movies = JSON.parse(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onAddMovie() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  onDelete(index: number) {
    this.movieService.deleteMovie(index);
    this.onSaveMovies();
  }
}
