import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPage } from '@product/pages/product/product.page';
import { SharedModule } from '@shared/shared.module';

export const productRoutes: Routes = [
    {
        path: ':id',
        component: ProductPage
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes)
    ],
    declarations: [
        ProductPage
    ]
})
export class ProductModule {
}
