import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConsultantpanelComponent } from './pages/consultantpanel/consultantpanel.component';
import { SlidersComponent } from './pages/sliders/sliders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent, title: 'Best Surgical Hospital in Lohegaon Pune | Phoenix Hospital Porwal Road', data: { description: 'Phoenix Hospital is one of the best surgical hospitals in Lohegaon Pune located on Porwal Road near Viman Nagar offering advanced surgery ICU emergency care and specialist consultations.' } },
  { path: 'About', component: AboutComponent, title: 'About Phoenix Hospital | Trusted Hospital in Lohegaon Pune', data: { description: 'Learn about Phoenix Hospital Lohegaon a trusted multispeciality hospital on Porwal Road Pune providing surgical care emergency services ICU facilities and expert doctors.' } },
  { path: 'Facilities', component: FacilitiesComponent, title: 'Hospital Facilities in Lohegaon Pune | ICU OT Rooms', data: { description: 'Phoenix Hospital Lohegaon offers advanced hospital facilities including ICU operation theater private rooms general wards and 24 hour emergency services.' } },
  { path: 'Service', component: ServicesComponent, title: 'Hospital Services in Lohegaon Pune | Surgical and Medical Care', data: { description: 'Explore hospital services at Phoenix Hospital Lohegaon including surgical treatment emergency care orthopedics general medicine ICU and diagnostics.' } },
  { path: 'Testimonial', component: TestimonialsComponent, title: 'Patient Reviews Phoenix Hospital Lohegaon | Hospital Testimonials', data: { description: 'Read patient testimonials and experiences at Phoenix Hospital Lohegaon one of the trusted hospitals in Pune providing compassionate healthcare.' } },
  { path: 'Contactus', component: ContactComponent, title: 'Contact Phoenix Hospital Lohegaon | Hospital on Porwal Road Pune', data: { description: 'Contact Phoenix Hospital located at Skyways Zudio Building Porwal Road Lohegaon Pune for emergency services consultations and appointments.' } },
  { path: 'DoctorPanel', component: ConsultantpanelComponent, title: 'Expert Doctors in Lohegaon Pune | Phoenix Hospital Specialists', data: { description: 'Meet experienced doctors and medical specialists at Phoenix Hospital Lohegaon providing advanced surgical care emergency treatment and consultations.' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
