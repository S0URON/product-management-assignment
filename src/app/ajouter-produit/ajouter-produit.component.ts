import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../modele/produit';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css'],
})
export class AjouterProduitComponent implements OnInit {
  constructor(private productService: ProductService, private route: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('id')) this.route.navigate(['/login']);
  }

  addProduct(f: NgForm): void {
    console.log(f.value);
    
    this.productService.addProduct({
      ...f.value,
      image: './assets/image/dell.jpg',
    });
    this.route.navigate(['/liste-produit']);
  }
}
