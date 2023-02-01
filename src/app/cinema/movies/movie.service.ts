import { Injectable, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[] = [];
  /*
  movies: Movie[] = [
    new Movie(
      'IT',
      'To – amerykański film fabularny z 2017 roku, którego reżyserem jest Andy Muschietti. Powstał na podstawie scenariusza Chase’a Palmera, Cary’ego Fukunagi i Gary’ego Daubermana, adaptującego powieść autorstwa Stephena Kinga, To.',
      'Andres Muschietti',
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQt2GAUoD0MhFZRD0PR8I3x8TUXdlTYXojJljEWhP1FXzzZIW-c'
    ),
    new Movie(
      'IT - Chapter 2',
      'To: Rozdział 2 – amerykański horror z 2019 roku. Druga część filmu z 2017 roku opartego na książce Stephena Kinga o tym samym tytule.',
      'Andres Muschietti',
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlsN9dE0028UTyyOviXts_epKsSo9Hli2n1Lp_xSZOqEu3r7km'
    ),
    new Movie(
      'IT - Chapter 2',
      'To: Rozdział 2 – amerykański horror z 2019 roku. Druga część filmu z 2017 roku opartego na książce Stephena Kinga o tym samym tytule.',
      'Andres Muschietti',
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlsN9dE0028UTyyOviXts_epKsSo9Hli2n1Lp_xSZOqEu3r7km'
    ),
    new Movie(
      'IT',
      'To – amerykański film fabularny z 2017 roku, którego reżyserem jest Andy Muschietti. Powstał na podstawie scenariusza Chase’a Palmera, Cary’ego Fukunagi i Gary’ego Daubermana, adaptującego powieść autorstwa Stephena Kinga, To.',
      'Andres Muschietti',
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQt2GAUoD0MhFZRD0PR8I3x8TUXdlTYXojJljEWhP1FXzzZIW-c'
    ),
    new Movie(
      'IT - Chapter 2',
      'To: Rozdział 2 – amerykański horror z 2019 roku. Druga część filmu z 2017 roku opartego na książce Stephena Kinga o tym samym tytule.',
      'Andres Muschietti',
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlsN9dE0028UTyyOviXts_epKsSo9Hli2n1Lp_xSZOqEu3r7km'
    ),
    new Movie(
      'IT - Chapter 2',
      'To: Rozdział 2 – amerykański horror z 2019 roku. Druga część filmu z 2017 roku opartego na książce Stephena Kinga o tym samym tytule.',
      'Andres Muschietti',
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlsN9dE0028UTyyOviXts_epKsSo9Hli2n1Lp_xSZOqEu3r7km'
    ),
  ];
  */
  constructor(private dataStorageService: DataStorageService) {}

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

  getMovie(index?: number) {
    return this.movies[index!];
  }
  addMovie(movie: Movie) {
    this.movies.push(movie);
    this.onSaveMovies();
  }

  updateMovie(index: number, newMovie: Movie) {
    this.movies[index] = newMovie;
  }

  deleteMovie(index: number) {
    this.movies.splice(index, 1);
  }
}
