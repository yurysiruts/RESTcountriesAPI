import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HTTPService } from 'src/app/core/http.service';
import { Country } from 'src/app/types/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  region: {name: string};

  countries = [
    {
      name: "Great Britain",
      src: "../../../assets/flag-of-england.png"
    },
    {
      name: "Germany",
      src: "../../../assets/Flag_of_Germany.png"
    },
    {
      name: "Poland",
      src: "../../../assets/Flag_of_Poland.png"
    },
  ];

  countries$: Observable<Country[]>;

  constructor(private route: ActivatedRoute, private api: HTTPService) { }

  ngOnInit() {
    this.countries$ = this.api.getCountryList();
  };

}
