import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

    private _url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

    public getFoods(): Observable<Food[]> {
        return this.http.get<Food[]>(this._url+'/foods')
    }

    public getIngredients(): Observable<Ingredient[]> {
        return this.http.get<Ingredient[]>(this._url+'/ingredients')
    }

}