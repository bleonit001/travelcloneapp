import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import moment from 'moment';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import intlTelInput from 'intl-tel-input';

// The default export of intl-tel-input is the initializer function
// We define our own types here to avoid TS errors.
type IntlTelInputInstance = ReturnType<typeof intlTelInput>;
interface ExtendedOptions {
  initialCountry?: string;
  preferredCountries?: string[];
}

@Component({
  selector: 'app-flight-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxDaterangepickerMd],
  templateUrl: './flight-form.html',
  styleUrls: ['./flight-form.css']
})
export class FlightFormComponent implements AfterViewInit {
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

  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;
  itiInstance!: IntlTelInputInstance;

  ngAfterViewInit() {
    const options: ExtendedOptions = {
      initialCountry: 'xk',
      preferredCountries: ['xk', 'al', 'mk', 'rs']
    };

    this.itiInstance = intlTelInput(this.phoneInput.nativeElement, options);
  }


  
submitForm() {
  // Get only the dial code (e.g., 383 for Kosovo)
  const dialCode = this.itiInstance.getSelectedCountryData().dialCode;

  // Get the raw number without prefix (e.g., 44123456)
  const nationalNumber = this.phoneInput.nativeElement.value;

  // Combine them into one string
  const fullPhoneNumber = `+${dialCode} ${nationalNumber}`;

  // Update flightData
  this.flightData.phoneCode = `+${dialCode}`;
  this.flightData.phoneNumber = nationalNumber;

   console.log('📦 Form submitted:', {
    tripType: this.flightData.tripType,
    from: this.flightData.from,
    to: this.flightData.to,
    departureDate: this.flightData.departureDate,
    returnDate: this.flightData.returnDate,
    adults: this.flightData.adults,
    children: this.flightData.children,
    infants: this.flightData.infants,
    fullPhoneNumber // only the complete phone number
  });
}}