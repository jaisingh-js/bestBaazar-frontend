import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) { }

  getProducts(): Observable<{products: Product[]}> {
    return this.apiService.get(`products`);
  }

  getProduct(id: number): Observable<{product:Product}> {
    return this.apiService.get(`products/${id}`);
  }
}
