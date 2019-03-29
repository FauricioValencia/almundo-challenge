import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Hotel } from './../models/hotel.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  constructor(private http: HttpClient) {}

  fetchHotels({ stars, name }): Observable<Hotel[]> {
    const nameFilter = name ? `name=${name}` : '';
    const starsFilter = stars ? `&stars=${stars.join(',')}` : '';

    const queryUrl = `http://hotels:5000/api/v2/hotels?${nameFilter}${starsFilter}`;

    return this.http.get<Hotel[]>(queryUrl);
  }

  fetchAllHotels(): Observable<Hotel[]> {
    const queryUrl = `http://hotels:5000/api/v2/hotels`;

    return this.http.get<Hotel[]>(queryUrl);
  }
}
