import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn = false;
  isAdmin = false;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((islogged) => {
      this.isUserLoggedIn = islogged;
    });
    this.authService.isAdmin$.subscribe((isAdminTrue) => {
      this.isAdmin = isAdminTrue;
    });
  }

  // log Out
  LogOut() {
    localStorage.clear();
    window.location.reload();
  }
}
