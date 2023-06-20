import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = this.productService.getProducts().pipe(map(data => data.products));

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

}
