import { Component, HostBinding, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { CartItemInterface } from '../../interfaces/cart.interface';

@Component({
  selector: 'app-mini-cart',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, CurrencyPipe],
  templateUrl: './mini-cart.component.html',
  styleUrl: './mini-cart.component.css',
  animations: [
    trigger('cartAnimation', [
      transition(':enter', [
        style({ width: '300px', opacity: 0 }),
        animate('300ms', style({ width: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ width: '*', opacity: 1 }),
        animate('300ms', style({ width: '300px', opacity: 0 }))
      ]),
    ]),
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
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

  itemById(index: number, item: CartItemInterface) {
    return item.id;
  }

  @HostBinding('@cartAnimation') get cartAnimation() {
    return null;
  }
}
