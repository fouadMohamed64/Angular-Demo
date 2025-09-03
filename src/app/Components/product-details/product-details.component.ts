import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../../Models/iproducts';
import { ProductsService } from '../../Services/products.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  productId!: number;
  product: IProducts | null = null;

  constructor(
    public activatedRoute: ActivatedRoute,
    public productsService: ProductsService,
    public location: Location
  ) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.paramMap.get('id')) // id
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.product = this.productsService.getProductById(this.productId)
  }

  goBack() {
    this.location.back();
  }

  prev(){}

  next(){}

}
