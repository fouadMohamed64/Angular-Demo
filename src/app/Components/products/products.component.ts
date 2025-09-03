import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProducts } from '../../Models/iproducts';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { ImageBorderDirective } from '../../Directives/image-border.directive';
import { SeparatorPipe } from '../../Pipes/separator.pipe';
import { ProductsService } from '../../Services/products.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ImageBorderDirective, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges , OnInit{

  // products: IProducts[];
  categories: ICategory[];
  totalPrice: number = 0;
  selectedCategoryID: number = 1;
  filteredProducts: IProducts[];
  dateNow: Date = new Date();

  @Input() recevedSelectedCategoryID:number = 1;

  @Output() onTotalPriceChanges:EventEmitter<number> = new EventEmitter<number>();

  constructor(public productsService: ProductsService , public router: Router){
    // this.products = [
    //   {id: 100 , name: "BMW" , quantity: 1 , price: 33333 , imageURl: 'assets/Images/car.jpeg' , categoryID: 1},
    //   {id: 200 , name: "Mercedes-Benz" , quantity: 2 , price: 444444 , imageURl: 'assets/Images/car.jpeg' , categoryID: 1},
    //   {id: 300 , name: "Hawaii" , quantity: 5 , price: 2332 , imageURl: 'assets/Images/phone.jpeg' , categoryID: 2},
    //   {id: 400 , name: "Iphone" , quantity: 0 , price: 26000 , imageURl: 'assets/Images/phone.jpeg' , categoryID: 2},
    //   {id: 500 , name: "Casio" , quantity: 6 , price: 6000 , imageURl: 'assets/Images/watch.jpeg' , categoryID: 3},
    //   {id: 600 , name: "Rado" , quantity: 0 , price: 8000 , imageURl: 'assets/Images/watch.jpeg' , categoryID: 3},
    //   {id: 700 , name: "Dell" , quantity: 4 , price: 18000 , imageURl: 'assets/Images/laptop.jpeg' , categoryID: 4},
    //   {id: 800 , name: "Lenovo" , quantity: 1 , price: 16000 , imageURl: 'assets/Images/laptop.jpeg' , categoryID: 4},
    // ];
    this.categories = [
      {id: 1 , name: 'Car'},
      {id: 2 , name: 'Mobile'},
      {id: 3 , name: 'Watch'},
      {id: 4 , name: 'Labtop'},
    ]
    // this.filteredProducts = this.products;
    this.filteredProducts = this.productsService.getAllProducts();
  }
  ngOnInit() {
    // this.filteredProducts = this.products;
    this.filteredProducts = this.productsService.getAllProducts();
  }
  ngOnChanges() {
    // this.filterFunction();
    this.filteredProducts = this.productsService.getProductsByCategoryId(this.recevedSelectedCategoryID)
  }

  buy(prdPrice: number , inputValue: string){
    this.totalPrice += prdPrice * +inputValue;
    this.onTotalPriceChanges.emit(this.totalPrice)
  }
  


  // changeSElectedCatID(){
  //   this.selectedCategoryID = 4;
  // }


  // tracking( index:number , prd: IProducts ){
  //   return prd.id;
  // }

  // filterFunction(){
  //   this.filteredProducts = this.products.filter((ele) => ele.categoryID == this.recevedSelectedCategoryID)
  // }

  showDetails(prdID: number){
    // this.router.navigateByUrl(`/productDetails/${prdID}`);
    this.router.navigate(['/productDetails' , prdID])
  }
  
}

