import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { map } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { MiniCartComponent } from '../mini-cart/mini-cart.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe, MiniCartComponent, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private readonly cartService = inject(CartService);
  cartItemsLength$ = this.cartService.cartItems.pipe(map(items => items.length));
  viewMiniCart$ = this.cartService.viewMiniCart;

  openMiniCart() {
    this.cartService.openMiniCart();
  }

  closeMiniCart() {
    this.cartService.closeMiniCart();
  }
}
