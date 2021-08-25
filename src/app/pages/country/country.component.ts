import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HTTPService } from 'src/app/core/http.service';
import { Country, Currency, Language } from 'src/app/types/api';
import { tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  country$: Observable<Country>;
  borderCountries$: Observable<Country[]>

  constructor(
    private api: HTTPService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.country$ = this.api.getCountryInfo(params.country)
        .pipe(
          tap((res) => console.log(res)),
          mergeMap((res) => {
            this.borderCountries$ = this.api.getCountryByCodes(res.borders);
            return of(res)
          })
        );
    });
  }

  displayCurr(currencies: Currency[]) {
    return currencies.map(currency => currency.name).join(', ');
  }

  displayLang(languages: Language[]) {
    return languages.map(language => language.name).join(', ');
  }

}
