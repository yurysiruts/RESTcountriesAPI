import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
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

  countries$: Observable<Country[]>;

  constructor(private route: ActivatedRoute, private api: HTTPService) { }

  ngOnInit() {
    this.countries$ = this.api.getCountryList();
    console.log(this.route.snapshot.params);
    console.log(this.routeRegion);
  };

  routeRegion: string = this.route.snapshot.params.continent;
}
