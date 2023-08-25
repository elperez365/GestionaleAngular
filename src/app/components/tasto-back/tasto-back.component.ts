import { Component } from '@angular/core';

@Component({
  selector: 'app-tasto-back',
  templateUrl: './tasto-back.component.html',
  styleUrls: ['./tasto-back.component.scss'],
})
export class TastoBackComponent {
  onClick() {
    window.history.back();
  }
}
