import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SearchType } from '@interfaces/search.interface';
import { environment } from 'src/environments/environment.prod';

let headers = new HttpHeaders({ 'x-rapidapi-host': environment?.host, 'x-rapidapi-key': environment?.apiKey});

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor(private http: HttpClient) { }
 

  searchData(term?: string, locale?: SearchType): Observable<any> { 
    return this.http.get(`${environment?.url}?term=${term}&locale=${locale}`,{headers: headers}).pipe(
      map(results => results?.['hints']),catchError(this.erroHandler)
    );
  }
  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
/*   getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  } */
}