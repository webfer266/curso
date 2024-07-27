import { ObservationAnswerService,AnsObservation } from './../../services/observationAnswers/observation-answer.service'
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  observation: AnsObservation={
    idAnswer:0,
    idQuestionRef:0,
    nameOpcion:""
  }
constructor(private ObservationAnswerService:ObservationAnswerService, private router:Router ){}
ngOnInit():void{}

agregar(){
  this.observation.idAnswer
  if (!this.observation) {
    console.log("ingrese los valores requeridos");
  }
  else{
    this.ObservationAnswerService.postObservations(this.observation).subscribe()
  }
}

}
