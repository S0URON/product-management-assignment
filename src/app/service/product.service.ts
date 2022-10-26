import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../modele/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  async getListProduct (){
    return this.httpClient.get<Product[]>("http://localhost:3000/products");
  }

  async getProductById (id: number) : Promise<Product>{
    const res = await fetch(`http://localhost:3000/products/${id}`, { method: "get"});
    const data = await res.json();

    return data as Product;
  }
}
