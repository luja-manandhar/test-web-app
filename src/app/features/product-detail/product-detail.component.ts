import { Component, inject } from '@angular/core';
import { mock_data } from '../../mock_data/data';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ProductFeatureComponent } from '../../components/product-feature/product-feature.component';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ProductDetailInterface } from '../../interfaces/product-detail.interface';
import { CartService } from '../../services/cart.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CarouselComponent, ProductFeatureComponent, NgFor, CurrencyPipe, NgIf, AsyncPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  data:ProductDetailInterface = mock_data;
  quantity: number = 1;
  private readonly cartService = inject(CartService);
  itemInCart$ = this.cartService.cartItems.pipe(map(items => items.find(item => item.id === this.data.id)));

  increaseQty() {
    if (this.quantity >= this.data.stock) return;
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity <= 1) return;
    this.quantity--;
  }

  addToCart(id: number, quantity: number, name: string, unitPrice: number, image: string) {
    this.cartService.addToCart(id, name, quantity, unitPrice, image);
  }

  openMiniCart() {
    this.cartService.openMiniCart();
  }

  featureById(
    index: number,
    feature: { id: number; title: string; image: string; desc: string }
  ) {
    return feature.id;
  }
}
