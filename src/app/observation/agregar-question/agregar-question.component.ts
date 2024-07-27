import { Router } from '@angular/router';
import { QuesObservation, ObservationQuestionService } from './../../services/observationQuestions/observation-question.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-question',
  templateUrl: './agregar-question.component.html',
  styleUrls: ['./agregar-question.component.css']
})
export class AgregarQuestionComponent {
  observation: QuesObservation={
    idQuestion:0,
    nameQuestion:"",
    answerRef:['64df41628154fc0586bbcc3e']
  }
constructor(private ObservationQuestionService:ObservationQuestionService, private router:Router ){}
ngOnInit():void{}

agregar(){
  this.observation.idQuestion
  if (!this.observation) {
    console.log("ingrese los valores requeridos");
  }
  else{
    this.ObservationQuestionService.postObservations(this.observation).subscribe()
  }
}
}
