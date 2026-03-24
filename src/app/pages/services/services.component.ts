import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  buttonText: string = 'मराठी'; // Default (first slide is English)

  @ViewChild('langBtn', { static: true }) langBtn!: ElementRef;

  ngAfterViewInit(): void {
    const carousel = document.getElementById('carouselExample');

    if (carousel) {
      carousel.addEventListener('slid.bs.carousel', () => {
        const activeItem = carousel.querySelector('.carousel-item.active');
        const index = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(activeItem!);

        if (index === 0) {
          // English slide is active → show Marathi
          this.buttonText = 'मराठी';
        } else {
          // Marathi slide is active → show English
          this.buttonText = 'English';
        }
      });
    }
  }
}
