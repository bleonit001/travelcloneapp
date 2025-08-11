import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FlightFormComponent,NgxDaterangepickerMd],
  template: `
    <main class="bg-gray-50 min-h-screen">
      <app-flight-form></app-flight-form>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'flight-booking-app';
}
