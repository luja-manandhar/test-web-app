import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input({ required: true }) images!: string[];
  currentIndex: number = 0;

  nextImage() {
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1)%this.images.length;
    },1)
  }

  prevImage() {
    setTimeout(() => {
      this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
    },1)
  }

  imageByIndex(index: number, image: string) {
    return index;
  }
}
