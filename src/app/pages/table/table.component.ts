// Angular imports
import { Component, inject } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';

// Project imports
import { Product } from '../../core/models';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CdkTableModule, NavbarComponent],
  templateUrl: './table.component.html',
})
export class TableComponent {
  products: Product[] = [];
  columns: string[] = ['#No', 'Name', 'price', 'cover'];
  total: number = 0;

  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;

        this.total = this.products
          .map((product) => product.price)
          .reduce((price, total) => price + total, 0);
      });
  }
}
