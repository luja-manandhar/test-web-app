import { Component, Input } from '@angular/core';
import { ProductFeatureInterface } from '../../interfaces/product-detail.interface';

@Component({
  selector: 'app-product-feature',
  standalone: true,
  imports: [],
  templateUrl: './product-feature.component.html',
  styleUrl: './product-feature.component.css'
})
export class ProductFeatureComponent {
  @Input({ required: true }) featureData!: ProductFeatureInterface;
}
