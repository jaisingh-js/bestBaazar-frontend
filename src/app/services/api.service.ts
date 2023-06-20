import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public get(slug: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.baseURL}/${slug}`, {params});
  }

  public post(slug: string, body: Object = {}): Observable<any> {
    return this.http.post(`${this.baseURL}/${slug}`, body);
  }

  public put(slug: string, body: Object = {}): Observable<any> {
    return this.http.put(`${this.baseURL}/${slug}`, body);
  }
}
