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
import { InsuranceComponent } from './pages/insurance/insurance.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'MultispecialityHospitalinLohegaon', component: HomeComponent, title: 'Best Multispeciality Hospital in Lohegaon Pune | Phoenix Hospital', data: { description: 'Phoenix Hospital is a trusted multispeciality hospital in Lohegaon Pune offering 24x7 emergency care, ICU, surgical services, diagnostics, maternity care, and cashless insurance facilities.' } },
  { path: 'About', component: AboutComponent, title: 'About Phoenix Hospital | Leading Hospital in Lohegaon Pune', data: { description: 'Learn about Phoenix Hospital, a patient-focused multispeciality hospital in Lohegaon Pune providing emergency care, surgical treatments, ICU support, and ethical healthcare services.' } },
  { path: 'Facilities', component: FacilitiesComponent, title: 'Hospital Facilities in Lohegaon Pune | ICU OT Rooms', data: { description: 'Discover advanced hospital facilities including ICU, operation theatre, diagnostics, pathology, pharmacy, and emergency care at Phoenix Hospital, Lohegaon Pune.' } },
  { path: 'Service', component: ServicesComponent, title: 'Medical & Surgical Services | Phoenix Hospital Lohegaon', data: { description: 'Explore comprehensive medical, surgical, ICU, orthopedic, pediatric, gynecology, cardiology, and emergency care services at Phoenix Hospital in Lohegaon Pune.' } },
  { path: 'Testimonial', component: TestimonialsComponent, title: 'Patient Testimonials | Trusted Hospital in Lohegaon Pune', data: { description: 'Read genuine patient reviews and experiences about emergency care, surgical treatments, maternity services, and healthcare support at Phoenix Hospital Lohegaon.' } },
  { path: 'Contactus', component: ContactComponent, title: 'Contact Phoenix Hospital | Hospital Near Porwal Road Lohegaon', data: { description: 'Contact Phoenix Hospital for appointments, emergency care, ICU services, surgical consultations, and cashless insurance support in Lohegaon Pune. Phoenix Hospital located at Skyways Zudio Building Porwal Road Lohegaon Pune for emergency services consultations and appointments.' } },
  { path: 'DoctorPanel', component: ConsultantpanelComponent, title: 'Doctor Panel | Specialist Doctors at Phoenix Hospital Lohegaon', data: { description: 'Meet the experienced doctors and specialists at Phoenix Hospital, providing expert medical, surgical, pediatric, gynecology, orthopedic, and critical care services in Lohegaon Pune.' } },
  { path: 'Insurance', component: InsuranceComponent, title: 'Cashless Insurance Facility | Phoenix Hospital Lohegaon', data: { description: 'Phoenix Hospital offers cashless insurance facilities in Lohegaon Pune with leading insurance companies and TPAs for hassle-free hospitalization and treatment.' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
