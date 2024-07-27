import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavarComponent } from './navar/navar.component';
import { LonginComponent } from './longin/longin.component';
import { ObservationComponent } from './observation/observation.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarComponent } from './observation/agregar/agregar.component';
import { AgregarQuestionComponent } from './observation/agregar-question/agregar-question.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavarComponent,
    LonginComponent,
    ObservationComponent,
    AgregarComponent,
    AgregarQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
