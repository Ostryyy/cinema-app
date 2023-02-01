import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgControl } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { CinemaComponent } from './cinema/cinema.component';
import { HttpClientModule } from '@angular/common/http';
import { loadingSpinnerComponent } from './shared/loading-spinner.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './cinema/movies/movies.component';
import { ReservationsComponent } from './cinema/reservations/reservations.component';
import { ShortenPipe } from './shorten.pipe';
import { MovieDetailComponent } from './cinema/movies/movie-detail/movie-detail.component';
import { MovieItemComponent } from './cinema/movies/movie-item/movie-item.component';
import { MovieAddEditComponent } from './cinema/movies/movie-add-edit/movie-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CinemaComponent,
    loadingSpinnerComponent,
    HeaderComponent,
    MoviesComponent,
    ReservationsComponent,
    ShortenPipe,
    MovieDetailComponent,
    MovieItemComponent,
    MovieAddEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
