import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SearchType } from '@interfaces/search.interface';
import { environment } from 'src/environments/environment.prod';

let headers = new HttpHeaders({ 
  'x-rapidapi-host': environment?.host,
  'x-rapidapi-key': environment?.apiKey,
  'content-type': 'text/plain',
});

export class Song {
  id:number
  offset:number

}

@Injectable({
  providedIn: 'root'
})
export class DetectedService {

  constructor(private http: HttpClient) { }
 

  detectedSong(body: string): Observable<any>{
  const type=JSON.stringify(body);
    return this.http.post(`${environment?.urlDetect}`,{body:type}, {headers: headers}).pipe(
      map(results => console.log(results?.['matches']) ),catchError(this.erroHandler));
  
  }
  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
/*   getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  } */
}