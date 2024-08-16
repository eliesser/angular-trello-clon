// Angular imports
import { Component, inject } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';

// Project imports
import { Product } from '../../core/models';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CdkTableModule, NavbarComponent],
  templateUrl: './table.component.html',
})
export class TableComponent {
  products: Product[] = [];
  columns: string[] = ['cover', '#No', 'Name', 'price'];

  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
  }
}
