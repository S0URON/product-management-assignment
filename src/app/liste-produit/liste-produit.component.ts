import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../modele/produit';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css'],
})
export class ListeProduitComponent implements OnInit {
  productList: Product[] = [];
  filterProduct: Product[] = [];
  constructor(private productService: ProductService, private route: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('id')) this.route.navigate(['/login']);

    this.productService.getListProduct().subscribe((data) => {
      this.productList = [...data];
      this.filterProduct = [...this.productList];
    });
  }

  set filter(filterString: string) {
    this.filterProduct = this.productList.filter((p) =>
      p.name.includes(filterString)
    );
  }

  getColor(n: number) {
    return n != 0 ? 'black' : 'red';
  }

  deleteProduct(id: number) {
    this.productService.deleteProductById(id).subscribe((_) => {
      this.productService.getListProduct().subscribe((data) => {
        this.productList = [...data];
        this.filterProduct = [...this.productList];
      });
    });
  }
}
