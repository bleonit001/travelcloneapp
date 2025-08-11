import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import moment from 'moment';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import intlTelInput from 'intl-tel-input';


@Component({
  selector: 'app-flight-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxDaterangepickerMd], // 👈 added picker here
  templateUrl: './flight-form.html',
  styleUrls: ['./flight-form.css']
})
export class FlightFormComponent {
  flightData = {
    tripType: 'roundTrip',
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    adults: '',
    children: '',
    infants: '',
    phoneCode: '',
    phoneNumber: ''
  
  
  };

 selected: { startDate: moment.Moment; endDate?: moment.Moment } = {
  startDate: moment(),
  endDate: moment()
};

  submitForm() {
    console.log('📦 Form submitted:', this.flightData);
  }
} 
