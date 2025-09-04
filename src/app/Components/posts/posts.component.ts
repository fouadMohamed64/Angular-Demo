import { Component, OnInit } from '@angular/core';
import { APIIntegrationService } from '../../Services/apiintegration.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent  implements OnInit{
  posts!: any[];

  constructor(public aPIIntegrationService: APIIntegrationService){}

  ngOnInit() {
    this.aPIIntegrationService.getAll('posts').subscribe((data: any)=>{
      console.log(data);
      this.posts = data
    })
  }

}
