// Angular imports
import { DataSource } from '@angular/cdk/collections';

// Third party imports
import { BehaviorSubject, Observable } from 'rxjs';

// Project imports
import { Product } from '../../core/models';

export class DataSourceProduct extends DataSource<Product> {
  data = new BehaviorSubject<Product[]>([]);

  connect(): Observable<Product[]> {
    return this.data;
  }

  init(products: Product[]) {
    this.data.next(products);
  }

  getTotal() {
    const products = this.data.getValue();
    return products
      .map((item) => item.price)
      .reduce((price, total) => price + total, 0);
  }

  update(id: Product['id'], changes: Partial<Product>) {
    const products = this.data.getValue();
    const productIndex = products.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      products[productIndex] = {
        ...products[productIndex],
        ...changes,
      };
      this.data.next(products);
    }
  }

  disconnect() {}
}
