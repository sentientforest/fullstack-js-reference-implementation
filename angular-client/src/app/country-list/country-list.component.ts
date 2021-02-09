import { Component, OnInit } from '@angular/core';

import { tap } from 'rxjs/operators';

import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];
  activeSelection: string = '';
  country: Country = {'geoname_id': '', name: ''};
  constructor(
    private csvc: CountryService
  ) { }

  ngOnInit(): void {
    let cl = this;
    cl.csvc.allCountries()
      .subscribe((list) => {
        cl.countries = list;
      })
  }

  selectCountry(country: Country) {
    this.csvc.selectCountry(country)
      .subscribe((response) => {
        this.country = response
        console.log('set active:');
        console.log(response['geoname_id'])
        this.activeSelection = response['geoname_id'];
      });
  }

}
