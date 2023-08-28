import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Modernize Angular Admin Tempplate';
  logged_in: string | null; 
  ngOnInit(): void {
    this.logged_in = localStorage.getItem('access_token')
  }
}
