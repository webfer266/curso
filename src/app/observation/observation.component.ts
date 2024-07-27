import { Component} from '@angular/core';
import {ObservationServicesService,Observation} from '../services/observation-services.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent {

  ListarObservation: Observation[]=[];
  constructor(private ObservationServicesService:ObservationServicesService, private router:Router) { }
  ngOnInit(){
    this.listarObservation()
  }
  listarObservation(){
    this.ObservationServicesService.getObservations()
    .subscribe(
    res=>{
          this.ListarObservation =<any>res.results.total;
          console.log(this.ListarObservation);

      },
      err=>console.log(err)

      );
  };


}
