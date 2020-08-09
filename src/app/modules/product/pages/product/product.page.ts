import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Product } from '@app/modules/product/models/product.model';
import * as productActions from '@app/modules/shared/state-manager/actions/product.action';

@Component({
    selector: 'product-page',
    templateUrl: 'product.page.html'
})
export class ProductPage implements OnInit {

    /**
        If you haven't already, I highly suggest reading the README.md
    */
    
    product$: Observable<Product>
    constructor(
        private route: ActivatedRoute,
        private store: Store<Product>
    ) {}

    ngOnInit() {
        this.loadProduct()
        this.product$ = this.store.select(product => product)
    }

    loadProduct() {
        this.route.paramMap.subscribe(params => {
            this.store.dispatch(new productActions.GetProductAction(params.get('id')))
        })
    }

}

