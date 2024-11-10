import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment } from '../../model/Appointment';

@Component({
  selector: 'app-appoinment-manage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appoinment-manage.component.html',
  styleUrl: './appoinment-manage.component.css'
})
export class AppoinmentManageComponent {

  constructor(private http:HttpClient){}

  public appoinments:Appointment[]=[];

  addAppoinment(appoinment:Appointment){
    this.http.post("http://localhost:8080/appointment/add-appointment",appoinment).subscribe((data)=>{
      this.loadAppoinmentsTable()
    })
  }

  loadAppoinmentsTable(){
    this.http.get<Appointment[]>("http://localhost:8080/appointment/view-all-appoinments").subscribe((data)=>{
      this.appoinments=data;
    })
    console.log(this.appoinments);
    
  }

}
