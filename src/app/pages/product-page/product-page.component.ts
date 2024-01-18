import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.components';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorComponent } from '../../components/global-error/global-error.component';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { ModalComponent } from '../../components/modal/modal.component';
import { CreateProductComponent } from '../../components/create-product/create-product.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    HttpClientModule,
    GlobalErrorComponent,
    FormsModule,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  title = 'angular';

  term: '';
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe();
  }
}
