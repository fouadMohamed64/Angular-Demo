import { Component, OnInit } from '@angular/core';
import { APIIntegrationService } from '../../Services/apiintegration.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos!: any[]

  constructor(public aPIIntegrationService: APIIntegrationService){}

  ngOnInit(){
    this.aPIIntegrationService.getAll('todos').subscribe((data: any)=>{
      console.log(data);
      this.todos = data;
    })
  }

}
