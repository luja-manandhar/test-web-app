import { Component } from '@angular/core';
import { mock_data } from '../../mock_data/data';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ProductFeatureComponent } from '../../components/product-feature/product-feature.component';
import { CurrencyPipe, NgFor } from '@angular/common';
import { ProductDetailInterface } from '../../interfaces/product-detail.interface';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CarouselComponent, ProductFeatureComponent, NgFor, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  data:ProductDetailInterface = mock_data;
  quantity: number = 1;

  featureById(
    index: number,
    feature: { id: number; title: string; image: string; desc: string }
  ) {
    return feature.id;
  }
}
