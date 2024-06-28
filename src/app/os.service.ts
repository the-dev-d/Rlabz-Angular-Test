import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsService {
  private url = 'https://api.dhaivathlal.in/os/';

  constructor(private http: HttpClient) { }

  getOs(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  selectOS(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}${id}`);
  }
}
