import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener, Input, inject } from '@angular/core';
import { CdkService } from '../../services/cdk.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, AsyncPipe],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input({ required: true }) images!: string[];
  currentIndex: number = 0;
  private readonly cdkService = inject(CdkService);
  isHandset$ = this.cdkService.isHandset;
  touchEventStartVal = 0;

  nextImage() {
    this.currentIndex === this.images.length - 1 ? null :
    this.currentIndex = (this.currentIndex + 1)%this.images.length;
  }

  prevImage() {
    this.currentIndex === 0 ? null :
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
  }

  @HostListener('touchstart', ['$event'])
  touchStart(e: TouchEvent) {
    this.touchEventStartVal = e.changedTouches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  touchEnd(e: TouchEvent) {
    if ((e.changedTouches[0].clientX - this.touchEventStartVal) > 50) {
      this.prevImage();
    }
    if ((e.changedTouches[0].clientX - this.touchEventStartVal) < -50) {
      this.nextImage();
    }
  }

  imageByIndex(index: number, image: string) {
    return index;
  }

}
