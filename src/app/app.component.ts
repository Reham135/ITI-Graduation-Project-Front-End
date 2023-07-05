import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/Authentication/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Final-Project-Demo';

  constructor(
    private authService: AuthenticationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.authService.isLoggedIn$.next(true);
    }
    if (localStorage.getItem('role') == 'Admin') {
      this.authService.isAdmin$.next(true);
    }
  }
}
