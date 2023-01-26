import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { CinemaComponent } from './cinema/cinema.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { loadingSpinnerComponent } from './shared/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CinemaComponent,
    loadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
