import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-add-edit',
  templateUrl: './movie-add-edit.component.html',
  styleUrls: ['./movie-add-edit.component.scss'],
})
export class MovieAddEditComponent {
  id?: number;
  movie?: Movie;
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;

      this.movie = this.movieService.getMovie(this.id);
    });
  }

  onSubmit(form: NgForm) {
    if (this.editMode) {
      this.movieService.updateMovie(this.id!, form.value);
    } else {
      this.movieService.addMovie(form.value);
    }
    this.dataStorage.storeMovies();
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
