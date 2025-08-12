import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import moment from 'moment';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import intlTelInput from 'intl-tel-input';

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
  moment = moment;
  flightData = {
    tripType: 'roundTrip', // 'oneWay' or 'roundTrip'
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

  // moment date range
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

  // Called when date changes
  updateFormattedDates() {
    if (this.flightData.tripType === 'oneWay') {
      this.flightData.departureDate = this.selected.startDate.format('DD/MM/YYYY');
    } else {
      this.flightData.departureDate = this.selected.startDate.format('DD/MM/YYYY');
      this.flightData.returnDate = this.selected.endDate?.format('DD/MM/YYYY') || '';
    }
  }

 submitForm() {
  const dialCode = this.itiInstance.getSelectedCountryData().dialCode;
  const nationalNumber = this.phoneInput.nativeElement.value;
  const fullPhoneNumber = `+${dialCode} ${nationalNumber}`;

  this.flightData.phoneCode = `+${dialCode}`;
  this.flightData.phoneNumber = nationalNumber;

  console.log('Form submitted:', {
    tripType: this.flightData.tripType,
    from: this.flightData.from,
    to: this.flightData.to,
    departureDate: this.flightData.departureDate
      ? moment(this.flightData.departureDate).format('DD.MM.YYYY')
      : '',
    returnDate: this.flightData.returnDate
      ? moment(this.flightData.returnDate).format('DD.MM.YYYY')
      : '',
    adults: this.flightData.adults,
    children: this.flightData.children,
    infants: this.flightData.infants,
    fullPhoneNumber
  });
}
}
