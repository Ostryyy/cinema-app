import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  username?: string;
  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.logout();
  }
  
  ngOnInit() {
    this.username = this.authService.username;
  }
}
