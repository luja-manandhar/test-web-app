import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItemInterface } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems$ = new BehaviorSubject<CartItemInterface[]>([]);
  private viewMiniCart$ = new BehaviorSubject<boolean>(false);
  constructor() { }
  
  addToCart(id: number, name: string, quantity: number, unitPrice: number, image: string) {
    const newItem:CartItemInterface = {
      id: id,
      image: image,
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

  openMiniCart() {
    this.viewMiniCart$.next(true);
  }

  closeMiniCart() {
    this.viewMiniCart$.next(false);
  }

  get cartItems() {
    return this.cartItems$.asObservable();
  }

  get viewMiniCart() {
    return this.viewMiniCart$.asObservable();
  }
}
