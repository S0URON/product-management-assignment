import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../modele/produit';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id!: number;
  product: Product;

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.ar.paramMap.subscribe((params) => {
      this.id = Number.parseInt(params.get('id'));
    });

    this.productService.getProductById(this.id).then((data) => {
      this.product = data;
    });
  }

  back() {
    this.route.navigate(['/liste-produit']);
  }
}
