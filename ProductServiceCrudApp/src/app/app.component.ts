import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProductServiceCrudApp';

  editProduct:Product;

  patchEditProduct(product:Product){
          this.editProduct=product;
  }
}
