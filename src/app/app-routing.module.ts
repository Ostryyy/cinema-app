import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { CinemaComponent } from './cinema/cinema.component';
import { MovieAddEditComponent } from './cinema/movies/movie-add-edit/movie-add-edit.component';
import { MovieDetailComponent } from './cinema/movies/movie-detail/movie-detail.component';
import { MoviesComponent } from './cinema/movies/movies.component';
import { ReservationsComponent } from './cinema/reservations/reservations.component';

const routes: Routes = [
  {
    path: 'cinema',
    component: CinemaComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'movies', component: MoviesComponent },
      { path: 'movies/movie/detail/:id', component: MovieDetailComponent },
      { path: 'movies/add', component: MovieAddEditComponent},
      { path: 'movies/movie/detail/:id/edit', component: MovieAddEditComponent},
      { path: 'reservations', component: ReservationsComponent },
    ],
  },
  { path: '', redirectTo: 'cinema/movies', pathMatch: 'full' },
  { path: 'cinema', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
