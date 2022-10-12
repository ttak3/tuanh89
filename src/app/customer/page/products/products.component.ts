import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  list: any;
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.getAll().subscribe((data) => {
      this.list = data
    })
  }

}
