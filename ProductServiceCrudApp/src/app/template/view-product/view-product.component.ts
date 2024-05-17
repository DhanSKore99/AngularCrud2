import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductserviceService } from '../../service/productservice.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit{

  constructor(private productService:ProductserviceService){}
 
  products:Product[];

  @Output() editProduct = new EventEmitter<Product>();
 
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe
      (
      (data:Product[])=>{
                         this.products=data;
                     }
    )
    }

    onEditProduct(product:Product){
      this.editProduct.emit(product);
    }

    onDeleteProduct(productId:number){
      this.productService.deleteProduct(productId).subscribe();
      window.location.reload();
    }



}
