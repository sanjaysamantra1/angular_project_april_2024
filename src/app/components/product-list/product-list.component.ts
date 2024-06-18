import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any;
  isLoading: boolean = false;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.productsService.fetchProducts().subscribe((response: any) => {
      this.products = response;
      this.isLoading = false;
    })
  }
}
