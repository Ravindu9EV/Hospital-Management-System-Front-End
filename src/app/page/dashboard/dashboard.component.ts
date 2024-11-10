import { Component } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { PatientManageComponent } from '../patient-manage/patient-manage.component';
import { AppoinmentManageComponent } from '../appoinment-manage/appoinment-manage.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavComponent,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
