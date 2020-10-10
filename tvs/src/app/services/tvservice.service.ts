import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TV } from '../models/TV';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8080/api/tvs';

@Injectable({
  providedIn: 'root'
})
export class TVServiceService {

  currentTVId: number;

  constructor(private http: HttpClient) { }

  setCurrentTVId(id: number){
    this.currentTVId = id;
  }

  getCurrentTVId(): number {
    return this.currentTVId;
  }

  getTVById(id: number): Observable<TV> {
    return this.http.get<TV>(apiUrl + "/" + id);
  }

  getTVs(): Observable<TV[]> {
    return this.http.get<TV[]>(apiUrl);
      // .pipe(
      //   tap(tv => console.log('fetched tvs'))
      //   // ,
      //   // catchError(this.handleError('getTVs', []))
      // );
  };

  deleteTV(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + id);
  }

  addTV(tv: TV): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("model", tv.model);
    bodyEncoded.append("brand", tv.brand);
    bodyEncoded.append("price", tv.price);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }

  updateBicycle(id: number, tv: TV): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("model", tv.model);
    bodyEncoded.append("brand", tv.brand);
    bodyEncoded.append("price", tv.price);
    let body = bodyEncoded.toString();
    
    return this.http.put(apiUrl + "/" + id, body, httpOptions);
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error); // log to console instead
  //     return of(result as T);
  //   };
  // }
}
