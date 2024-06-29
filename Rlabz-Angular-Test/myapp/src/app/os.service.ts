import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface OS {
  id: number;
  name: string;
}

interface OSDetail {
  recommendation: string;
}

@Injectable({
  providedIn: 'root'
})
export class OsService {
  private baseUrl = 'https://api.dhaivathlal.in/os';

  constructor(private http: HttpClient) {}

  getOsList(): Observable<OS[]> {
    return this.http.get<OS[]>(`${this.baseUrl}/`);
  }

  getOsDetail(id: number): Observable<OSDetail> {
    return this.http.get<OSDetail>(`${this.baseUrl}/${id}`);
  }
}
