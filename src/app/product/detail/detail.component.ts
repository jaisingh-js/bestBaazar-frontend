import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, map } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product = new Observable<Product>();

constructor(private productService: ProductService, private route: ActivatedRoute) {
}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const productId = params.get('id');
    if(productId) {
      this.fetchProduct(Number(productId));
    }
  })
}

fetchProduct(productId: number) {
  this.product = this.productService.getProduct(productId).pipe(map(data => data.product));
}

}
