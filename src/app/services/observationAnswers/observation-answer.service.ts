import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservationAnswerService {

  url= "http://localhost:8080/api/answerCharacterization/";

  constructor(private http :HttpClient) { }


  postObservations(observation: AnsObservation){
    return this.http.post(this.url,observation)
  }


}

export interface AnsObservation{
  idAnswer:number,
  idQuestionRef:number,
  nameOpcion:string
}
