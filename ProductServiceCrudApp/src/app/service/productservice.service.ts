import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  

  constructor(private http: HttpClient) { }

  saveProduct(product:Product){
    return this.http.post("http://localhost:9090/product/product",product);
  }

  getAllProducts(){
    return this.http.get("http://localhost:9090/product/products");
  }

  updateProduct(product: Product) {
   return this.http.put("http://localhost:9090/product/updateProduct/" + product.productId ,product);
  }

  deleteProduct(productId:number){
      return this.http.delete("http://localhost:9090/product/deleteProduct/" + productId);
  }


}
