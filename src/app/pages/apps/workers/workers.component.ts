import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports:[MaterialModule],
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WorkersComponent {}
