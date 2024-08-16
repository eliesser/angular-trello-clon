// Angular imports
import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { debounceTime } from 'rxjs';

// Project imports
import { Product } from '../../core/models';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from '../../shared/components/btn/btn.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule,
    CdkTableModule,
    NavbarComponent,
    BtnComponent,
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  dataSource = new DataSourceProduct();
  columns: string[] = ['#No', 'Name', 'price', 'cover', 'actions'];
  total: number = 0;
  input = new FormControl('', { nonNullable: true });

  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.dataSource.init(data);
        this.total = this.dataSource.getTotal();
      });

    this.input.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.dataSource.find(value);
    });
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 15 });
  }
}
