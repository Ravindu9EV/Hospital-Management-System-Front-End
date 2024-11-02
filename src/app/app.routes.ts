import { Routes } from '@angular/router';
import { PatientManageComponent } from './page/patient-manage/patient-manage.component';
import { AppoinmentManageComponent } from './page/appoinment-manage/appoinment-manage.component';

export const routes: Routes = [
    {
        path:"patient",
        component:PatientManageComponent
    },{
        path:"appoinment",
        component: AppoinmentManageComponent
    }
];
