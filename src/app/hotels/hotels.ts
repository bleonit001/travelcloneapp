import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Hotel {
  id: number;
  name: string;
  location: string;
  country: string; // e.g. 'greece' | 'turkey' | 'albania'
  image: string;   // path under /assets
}

@Component({
  selector: 'app-hotels',
  standalone: true,
  templateUrl: './hotels.html',
  styleUrls: ['./hotels.css'],
  imports: [CommonModule],
})
export class HotelsComponent implements OnInit {
  countries = [
    { key: 'turkey', label: 'Turkey' },
    { key: 'albania', label: 'Albania' },
    { key: 'greece', label: 'Greece' }
  ];

  activeCountry = 'greece'; // default active tab

  hotels: Hotel[] = [
    // sample data — replace image paths with actual files you place in /src/assets/hotels/
    { id: 1, name: 'Miraggio Thermal Spa Resort', location: 'Halkidiki, Greece', country: 'greece', image: 'https://hoisky.ch/accommodation/Greece/Halkidiki/miraggio_thermal/1.jpg' },
    { id: 2, name: 'Avaton Luxury Beach Resort', location: 'Halkidiki, Greece', country: 'greece', image: 'https://hoisky.ch/accommodation/Greece/Halkidiki/avaton_luxury/1.jpg' },
    { id: 3, name: 'Pomegranate Wellness SPA Hotel', location: 'Halkidiki, Greece', country: 'greece', image: 'https://hoisky.ch/accommodation/Greece/Halkidiki/pomegranate_wellness/1.jpg' },

    { id: 4, name: 'Istanbul Grand Hotel', location: 'Istanbul, Turkey', country: 'turkey', image: 'https://hoisky.ch/accommodation/Istanbul/Belek/maxx_royal/1.jpg' },
    { id: 5, name: 'Bodrum Seaside Resort', location: 'Bodrum, Turkey', country: 'turkey', image: 'https://hoisky.ch/accommodation/Istanbul/Belek/regnum_carya/1.jpg' },

    { id: 6, name: 'Tirana Boutique Hotel', location: 'Tirana, Albania', country: 'albania', image: 'https://hoisky.ch/accommodation/Albania/Durres/adriatik/1.jpg' },
    { id: 7, name: 'Saranda Beach Hotel', location: 'Saranda, Albania', country: 'albania', image: 'https://hoisky.ch/accommodation/Albania/Durres/pascucci/1.jpg' }
  ];

  constructor() {}

  ngOnInit(): void {}

  filteredHotels() {
    return this.hotels.filter(h => h.country === this.activeCountry);
  }

  setCountry(key: string) {
    this.activeCountry = key;
  }
}
