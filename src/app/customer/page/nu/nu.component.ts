import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-nu',
  templateUrl: './nu.component.html',
  styleUrls: ['./nu.component.css']
})
export class NuComponent implements OnInit {
  list: any;
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.getWoman().subscribe((data) => {
      this.list = data
    })
  }

}
