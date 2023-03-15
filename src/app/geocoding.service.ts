import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private geocodingApiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

  private apiKey = 'your API key'

  constructor(private http: HttpClient) { }

  getAddress(latitude: number, longitude: number): Observable<any> {
    const url = `${this.geocodingApiUrl}?latlng=${latitude},${longitude}&key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
