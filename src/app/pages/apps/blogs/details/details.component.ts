import { Component, OnInit } from '@angular/core';
import { blogService } from '../blogService.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class AppBlogDetailsComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
