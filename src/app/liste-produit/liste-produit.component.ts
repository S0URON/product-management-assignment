import { Component, OnInit } from '@angular/core';
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
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getListProduct().then((data) => {
      data.subscribe((pl) => {
        this.productList.push(...pl);
        this.filterProduct = [...this.productList];
      });
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
}
