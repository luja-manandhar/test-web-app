import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItemInterface } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems$ = new BehaviorSubject<CartItemInterface[]>([]);
  constructor() { }
  
  addToCart(id: number, name: string, quantity: number, unitPrice: number) {
    const newItem:CartItemInterface = {
      id: id,
      name: name,
      quantity: quantity,
      unitPrice: unitPrice
    }
    const currentList = this.cartItems$.getValue();
    this.cartItems$.next([...currentList, newItem]);
  }

  removeFromCart(id: number) {
    const currentList = this.cartItems$.getValue();
    const newList = currentList.filter(cart => cart.id !== id);
    this.cartItems$.next(newList);
  }

  get cartItems() {
    return this.cartItems$.asObservable();
  }
}
