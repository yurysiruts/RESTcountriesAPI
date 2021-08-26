import { Injectable, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Country } from "../types/api";
import { filter, map } from "rxjs/operators";
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class HTTPService {

  private api = 'https://restcountries.eu/rest/v2';

  name = '';
  
  constructor(private http: HttpClient, private route: Router) {
  }

  getCountryList() {
    return this.http.get<Country[]>(`${this.api}/all`);
  }
  // getCountryList(continent: string) {
  //   return this.http.get(`${this.api}/all`)
  //     .pipe(filter(country => {country.region.toLowerCase() === continent}));
  // }
  getCountryInfo(name: string) {
    return this.http
      .get<Country[]>(`${this.api}/name/${name}`)
      .pipe(map(([res]) => res));
  }
  getCountryByCodes(codes: string[]){
    return this.http.get<Country[]>(`${this.api}/alpha?codes=${codes.join(';')}`)
  }
}