import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';

// components

@Component({
  selector: 'app-dashboard1',
  standalone: true,
  imports: [
    TablerIconsModule,
    
  ],
  templateUrl: './dashboard1.component.html',
})
export class AppDashboard1Component {
  constructor() {}
}
