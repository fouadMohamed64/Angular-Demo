import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class APIIntegrationService {

  // URL: string = 'https://jsonplaceholder.typicode.com'
  URL: string = environment.URL

  constructor(public http: HttpClient) { }


  getAll(endPoint: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}/${endPoint}` ).pipe(
      retry(2),
      catchError((error:HttpErrorResponse)=>{
        return throwError(()=>{
          return new Error('Error Occor')
        })
      })
    )
  }

  getById(endPoint: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/${endPoint}/${id}`)
  }

  getByCategoryId(endPoint: string, catId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}/${endPoint}?catId=${catId}`)
  }

  create(endPoint: string, body: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/${endPoint}`, JSON.stringify(body) , {
      headers: {
        'content-type': 'aplication/json',
        'authorization': 'sdlkjflksdjflsdjflsdjfsdlfkjsdlk' // your token
      },
      params: {
        'catId': 'catID'
      }
    })
  }


}


// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/user
// https://jsonplaceholder.typicode.com/