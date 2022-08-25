import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor(private http: HttpClient) { }

  getproducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/data.json');
  }

   

  loadProducts(): Product[] { 
    this.getproducts().subscribe(res => {
      for (let index=0; index < res.length ; index++){
        const product=res[index];
        product.quantity=0;
      }
      this.products = res;
    });
    return this.products;
  }

  getProductById(id: number): Product {
    const found: Product | undefined = this.products.find(p => p.id == id);
    if (found) return found;
    else return new Product();
}

deleteProduct(product: Product): void {
   
  this.http.delete(`/products/${product.id}`).subscribe(data => {
    this.loadProducts();
  }, error => console.log(error));
}



}
