import { SearchResponse } from './../observation/interfaces/observation.interfaces';
import { map } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ObservationServicesService {

  url= "http://localhost:8080/api/questionsAnswersC/";

  constructor(private http :HttpClient) { }

  //get
  getObservations(){
    return this.http.get<SearchResponse>(this.url)

  }

  postObservations(observation: Observation){
    return this.http.post(this.url,observation)
  }
}
export interface Observation{
  idQuestion:number;
  nameQuestion:string;
  nameOpcion:string
}
