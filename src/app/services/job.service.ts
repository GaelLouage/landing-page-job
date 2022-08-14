import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from '../models/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
private readonly baseUrl = "./assets/data.json";
  constructor(public http:HttpClient) { }

  public getJobs():Observable<Jobs[]> {
    return this.http.get<Jobs[]>(this.baseUrl);
  }
}
