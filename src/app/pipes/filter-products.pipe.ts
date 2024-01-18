import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterProducts',
  standalone: true,
})
export class FilterProductsPipe implements PipeTransform {
   transform(products: IProduct[], search: string): IProduct[] {
    if (search) {
      return products.filter((product) =>
        product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    } else {
      return products;
    }
  }
}
