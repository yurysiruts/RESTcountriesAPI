import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPService } from './core/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'globe-main';

  constructor(private api: HTTPService) {}

  ngOnInit() {
    // this.api.getCountryList().subscribe((res)=>{console.log(res)})
  }
}
