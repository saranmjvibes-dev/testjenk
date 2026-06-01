import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  username = '';
  password = '';

  constructor() {}

  login() {
    console.log('Login attempt', { username: this.username, password: this.password });
    // Add real authentication logic here
  }
}
