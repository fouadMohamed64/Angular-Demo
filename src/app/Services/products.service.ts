import { Injectable } from '@angular/core';
import { IProducts } from '../Models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProducts[];

  constructor() {
    this.products = [
      { id: 100, name: "BMW", quantity: 1, price: 33333, imageURl: 'assets/Images/car.jpeg', categoryID: 1 },
      { id: 200, name: "Mercedes-Benz", quantity: 2, price: 444444, imageURl: 'assets/Images/car.jpeg', categoryID: 1 },
      { id: 300, name: "Hawaii", quantity: 5, price: 2332, imageURl: 'assets/Images/phone.jpeg', categoryID: 2 },
      { id: 400, name: "Iphone", quantity: 0, price: 26000, imageURl: 'assets/Images/phone.jpeg', categoryID: 2 },
      { id: 500, name: "Casio", quantity: 6, price: 6000, imageURl: 'assets/Images/watch.jpeg', categoryID: 3 },
      { id: 600, name: "Rado", quantity: 0, price: 8000, imageURl: 'assets/Images/watch.jpeg', categoryID: 3 },
      { id: 700, name: "Dell", quantity: 4, price: 18000, imageURl: 'assets/Images/laptop.jpeg', categoryID: 4 },
      { id: 800, name: "Lenovo", quantity: 1, price: 16000, imageURl: 'assets/Images/laptop.jpeg', categoryID: 4 },
    ];
  }

  getAllProducts():IProducts[]{
    return this.products;
  }

  getProductById(id:number):IProducts | null{
    let product = this.products.find((ele) => ele.id == id);
    return product ? product : null;
  }

  getProductsByCategoryId(catID:number):IProducts[]{
    return this.products.filter((ele) => ele.categoryID == catID);
  }

  getProductsIds(): number[]{
    return this.products.map((ele) => ele.id)
  }

}
