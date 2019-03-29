import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Hotel } from './../models/hotel.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  constructor(private http: HttpClient) {}

  fetchHotels({
    stars,
    name
  }: {
    stars: any[];
    name: string;
  }): Observable<Hotel[]> {
    const query = [];
    if (stars && !stars.includes('all')) {
      query.push(`stars=${stars}`);
    }
    if (name) {
      query.push(`name=${name}`);
    }

    // TODO: Extract URL to hotel service into a ENV variable
    const queryUrl = `http://localhost:5000/api/v2/hotels?${query.join('&')}`;

    return this.http.get<Hotel[]>(queryUrl);
  }
}
