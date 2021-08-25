import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Country } from "../types/api";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class HTTPService {

  private api = 'https://restcountries.eu/rest/v2'

  constructor(private http: HttpClient) {}

  getCountryList() {
    return this.http.get<Country[]>(`${this.api}/all`);
  }
  getCountryInfo(name: string) {
    return this.http
      .get<Country[]>(`${this.api}/name/${name}`)
      .pipe(map(([res]) => res));
  }
  getCountryByCodes(codes: string[]){
    return this.http.get<Country[]>(`${this.api}/alpha?codes=${codes.join(';')}`)
  }
}