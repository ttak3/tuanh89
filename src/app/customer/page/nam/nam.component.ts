import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-nam',
  templateUrl: './nam.component.html',
  styleUrls: ['./nam.component.css']
})
export class NamComponent implements OnInit {
  list: any;
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.getMan().subscribe((response) => {
      this.list = response;
      console.log(response)
    })
  }

}
