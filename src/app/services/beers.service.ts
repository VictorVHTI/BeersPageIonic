import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Constant } from "../classes/Constant";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  
  constructor(
    private _http: HttpClient
  ) {
   }

   public getAllBeers(): Observable<any> {
    return this._http.get(Constant.API, Constant.headers);
   }
}
