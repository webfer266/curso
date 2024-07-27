import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservationQuestionService {

  url= "http://localhost:8080/api/questionCharacterization/";

  constructor(private http :HttpClient) { }


  postObservations(observation: QuesObservation){
    return this.http.post(this.url,observation)
  }


}

export interface QuesObservation{
  idQuestion:number,
  nameQuestion:string,
  answerRef:[string]
}
