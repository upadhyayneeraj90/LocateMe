import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeocodingService } from './geocoding.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  address = '';

  constructor(private geocodingService: GeocodingService) {

  }


  ngOnInit(): void {
    // if (!navigator.geolocation) {
    //   //this.locationInput.nativeElement.value = "Geolocation is not supported by this browser.";
    // }


  }
  locateMe() {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.geocodingService.getAddress(latitude, longitude).subscribe(response => {
        this.address = response.results[0].formatted_address;
      });
    }, error => {
      console.log('Error: ', error);
    });
  }
}

