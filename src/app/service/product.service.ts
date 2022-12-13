import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../modele/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  host = "http://localhost:3000/products/";
  constructor(private httpClient: HttpClient) { }

  getListProduct (): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.host);
  }

  getProductById (id: number) : Observable<Product>{
    // const res = await fetch(`http://localhost:3000/products/${id}`, { method: "get"});
    // const data = await res.json();

    //return data as Product;

    return this.httpClient.get<Product>(this.host + id);
  }

  deleteProductById(id: number) : Observable<Object>{
    return this.httpClient.delete(this.host + id);
  }

  addProduct(p : {name: string, quantity: number, price: number, image: string}) {
    this.httpClient.post(this.host,p).subscribe(_ => {});
  }

  editProduct(id: number, p: {name: string, quantity: number, price: number, image: string}) {
    return this.httpClient.put(`${this.host}/${id}`, p)
  }
}
