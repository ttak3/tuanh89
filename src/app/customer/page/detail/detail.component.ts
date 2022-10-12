import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CartService } from 'src/app/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: any;
  constructor(private productservice: ProductService, private router: ActivatedRoute, private cartservice: CartService) { }

  ngOnInit(): void {
    let id = this.router.snapshot.params['id'];
    this.productservice.detail(id).subscribe((data) => {
      this.product = data
    })

    console.log(this.product)
    console.log(id)
  }

  addToCart(products: any):void{
    this.cartservice.add(products)
  }

}
