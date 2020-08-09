import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map'

import { Product } from '@app/modules/product/models/product.model';
import { environment as ENV } from '@enviornment/environment';

@Injectable()
export class ProductService {
    
    apiResource = `${ENV.apiURL}/products`;
    
    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Product[]>(this.apiResource);
    }

    getProduct(id: string) {
        return this.http.get<Product>(this.apiResource + '/' + id);
    }
}
