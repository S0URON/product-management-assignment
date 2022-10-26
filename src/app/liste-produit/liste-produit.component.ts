import { Component, OnInit } from '@angular/core';
import { Product } from '../modele/produit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css'],
})
export class ListeProduitComponent implements OnInit {
  productList: Product[] = [];
  filterProduct: Product[] = [];
  constructor() {}

  ngOnInit(): void {
    this.productList.push(
      ...[
        {
          id: 0,
          name: 'asus',
          price: 400,
          quantity: 5,
          image: "./assets/image/dell.jpg"
        },
        {
          id: 1,
          name: 'dell',
          price: 500,
          quantity: 10,
          image: "./assets/image/dell.jpg"
        },
        {
          id: 2,
          name: 'lenovo',
          price: 450,
          quantity: 15,
          image: "./assets/image/dell.jpg"
        },
      ]
    );
    this.filterProduct = [...this.productList]
  }

  set filter(filterString:string) {    
    this.filterProduct = this.productList.filter(p => p.name.includes(filterString))
  }
}
