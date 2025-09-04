import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  productsIDS!: number[]

  constructor(
    public activatedRoute: ActivatedRoute,
    public productsService: ProductsService,
    public location: Location,
    public router: Router
  ) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.paramMap.get('id')) // id
    // this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'))


    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id'))
      this.product = this.productsService.getProductById(this.productId)
    })


    // this.product = this.productsService.getProductById(this.productId)
  }

  goBack() {
    this.location.back();
  }

  prev() {
    this.productsIDS = this.productsService.getProductsIds();
    let index = this.productsIDS.indexOf(this.productId);
    this.router.navigateByUrl(`/productDetails/${this.productsIDS[--index]}`)
  }

  next() {
    let productsIDS = this.productsService.getProductsIds();
    let index = productsIDS.indexOf(this.productId);
    this.router.navigateByUrl(`/productDetails/${productsIDS[++index]}`)
  }

}
