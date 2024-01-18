import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  imports: [CommonModule, HttpClientModule],
})
export class ProductComponent {
  @Input() product: IProduct;

  details = false;
  changeDetails = (isShow: boolean) => (this.details = isShow);
}
