import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductserviceService } from '../../service/productservice.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit,OnChanges{

  constructor(private fb:FormBuilder,private ps: ProductserviceService ){}
 
 
  productRegForm:FormGroup;

  ngOnInit(): void {
      this.productRegForm=this.fb.group(
        {
           productId:[],
            productName:[''],
            productType:[''],
            productPrice:[]
        }
      )
  }

  @Input() productToBeEdit:Product;
  flag:boolean=false;

  ngOnChanges(): void {
    if(this.productRegForm!=null){
     this.productRegForm.patchValue({
      productId:this.productToBeEdit.productId,
      productName:this.productToBeEdit.productName,
      productType:this.productToBeEdit.productType,
      productPrice:this.productToBeEdit.productPrice
     })

     this.flag=true;

    }
  }
//if product is updated then flag will set to true.. then inside below method 
//we have inversed the flag value.. that means in this case,true flag will turn to false.
//& inside if block,since , the 'if' condition is flase,update opertaion is performed.
//'if' condition = true then save product.
// 'if' condition = false then update product.
  onSubmitProduct(){
    if(!this.flag){
      this.ps.saveProduct(this.productRegForm.value).subscribe();
      alert("New Product added successfully..");
      this.productRegForm.reset();
    }else{
      this.ps.updateProduct(this.productRegForm.value).subscribe();
      alert("Product updated successfully..");
      this.productRegForm.reset();
    }
    
  }





}
