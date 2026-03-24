import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() { }


  scrollTop() {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

  closeNavbar() {
    // Close the navbar by toggling the collapse class
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    if (navbarToggler) {
      navbarToggler.click();
    }
  }

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
