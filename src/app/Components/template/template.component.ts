import { Component } from '@angular/core';
import { IProducts } from '../../Models/iproducts';
import { FormsModule, NgForm } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { APIIntegrationService } from './../../Services/apiintegration.service';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule , CommonModule],
templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  product: IProducts = {} as IProducts

  constructor(public aPIIntegrationService: APIIntegrationService ){}

  onSubmit(myForm: NgForm){

    this.aPIIntegrationService.create('' , this.product).subscribe((data)=>{
      myForm.resetForm()
      // Router.nva
    })

  }

}
