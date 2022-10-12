import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = "http://localhost:3000/product"
const urlCate = "http://localhost:3000/category"

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(url)
  }

  detail(id: number): Observable<any> {
    return this.http.get<any>(`${url}/${id}`);
  }
  
  getMan():Observable<any>{
    return this.http.get<any>(`${url}?category_id=1`)
  }
  getWoman():Observable<any>{
    return this.http.get<any>(`${url}?category_id=2`)
  }
}
