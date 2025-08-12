import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { HotelsComponent } from './hotels/hotels';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FlightFormComponent,HotelsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-booking-app';

  
}
