import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private _http: HttpClient) { }

  newCake(newcake: any){
    console.log("I'm in your service and create a new cake", newcake);
    return this._http.post('/cake', newcake);
  }

  getAll(){
    return this._http.get('/cake');
  }

  showInfo(id){
    console.log(id);
    return this._http.post('/cakeFind', id)
  }

  addRating(cakeId, ratingFormData){
    console.log("Im in service");
    console.log("cake id: ", cakeId);
    console.log("form data: ", ratingFormData);
    return this._http.put('/cake/' + cakeId + '/rating', ratingFormData);
  }
}
