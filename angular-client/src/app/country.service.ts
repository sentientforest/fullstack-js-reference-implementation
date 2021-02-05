import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable ,  BehaviorSubject ,  of } from 'rxjs';

import { Country } from './country';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private listUrl = `${environment.apiBase}/countries`

  constructor(
    private http: HttpClient
  ) { }

  allCountries(): Observable<CountryList> {
    return this.http.get<Country[]>(`${this.listUrl}`)
      .pipe(
        tap((countries) => {
          // todo: refactor to use this.log / message service
          console.log(`fetched all countries:`)
          console.log(countries)
        }),
        catchError(this.handleError('allCountries', []))
      )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error || error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    // todo: refactor away from console.log to dedicated messageService
    // for error tracking and diagnositcs
    console.log(`Country Service: ${message}`)
  }
}
