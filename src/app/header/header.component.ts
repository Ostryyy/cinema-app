import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { MovieService } from '../cinema/movies/movie.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username?: string;
  constructor(
    private authService: AuthService,
    private dataStorage: DataStorageService
  ) {}

  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.username = this.authService.username;
  }
}
