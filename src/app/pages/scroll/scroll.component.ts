// Angular imports
import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Project imports
import { NavbarComponent } from '../../shared/components';

interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
}

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NgFor, NavbarComponent, ScrollingModule],
  templateUrl: './scroll.component.html',
})
export class ScrollComponent {
  products: Product[] = [];

  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
  }
}
