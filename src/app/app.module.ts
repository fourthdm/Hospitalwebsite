import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ServicesComponent } from './pages/services/services.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ConsultantpanelComponent } from './pages/consultantpanel/consultantpanel.component';
import { FiltersearchPipe } from './filtersearch.pipe';
import { SlidersComponent } from './pages/sliders/sliders.component';
import { MedicineComponent } from './specilityservice/medicine/medicine.component';
import { GeneralSurgeryComponent } from './specilityservice/general-surgery/general-surgery.component';
import { OrthopaedicsComponent } from './specilityservice/orthopaedics/orthopaedics.component';
import { UrologyComponent } from './specilityservice/urology/urology.component';
import { ICUComponent } from './specilityservice/icu/icu.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    FacilitiesComponent,
    TestimonialsComponent,
    ServicesComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ConsultantpanelComponent,
    FiltersearchPipe,
    SlidersComponent,
    MedicineComponent,
    GeneralSurgeryComponent,
    OrthopaedicsComponent,
    UrologyComponent,
    ICUComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
