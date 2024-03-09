import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-mini-cart',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, CurrencyPipe],
  templateUrl: './mini-cart.component.html',
  styleUrl: './mini-cart.component.css'
})
export class MiniCartComponent {
  private readonly cartService = inject(CartService);
  cartItems$ = this.cartService.cartItems;

  closeMiniCart() {
    this.cartService.closeMiniCart();
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }
}
