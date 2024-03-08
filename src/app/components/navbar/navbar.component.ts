import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private readonly cartService = inject(CartService);
  cartItemsLength$ = this.cartService.cartItems.pipe(map(items => items.length));
}
