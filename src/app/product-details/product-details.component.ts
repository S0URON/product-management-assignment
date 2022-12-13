import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
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
  product: Product = {};

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    quantity: new FormControl(0),
  });

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private route: Router
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('id')) this.route.navigate(['/login']);

    this.ar.paramMap.subscribe((params) => {
      this.id = Number.parseInt(params.get('id'));
    });

    this.productService.getProductById(this.id).subscribe((data) => {
      this.product = data;
      this.productForm.setValue({
        name: this.product.name,
        price: this.product.price,
        quantity: this.product.quantity,
      });
    });
  }

  back() {
    this.route.navigate(['/liste-produit']);
  }

  editProduct() {
    this.productService
      .editProduct(this.product.id, {
        id: this.product.id,
        ...this.productForm.value,
        image: './assets/image/dell.jpg',
      })
      .subscribe(() => {
        this.route.navigate(['/liste-produit']);
      });
  }
}
