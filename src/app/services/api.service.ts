import { Injectable } from '@angular/core';
import { ProductDetailInterface } from '../interfaces/product-detail.interface';
import * as mock_data from '../../assets/mock_data.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  get getMockData() {
    const data: ProductDetailInterface = mock_data;
    return data;
  }
}
