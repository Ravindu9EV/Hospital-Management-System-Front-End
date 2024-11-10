import { Routes } from '@angular/router';
import { PatientManageComponent } from './page/patient-manage/patient-manage.component';
import { AppoinmentManageComponent } from './page/appoinment-manage/appoinment-manage.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'',
        component:DashboardComponent
    },
        {
            path:"patient",
            component:PatientManageComponent
        },{
            path:"appoinment",
            component: AppoinmentManageComponent
        }
    ,{
        path:"dashboard",
        component:DashboardComponent,
        children:[
            {
                path:"patient",
                component:PatientManageComponent
            },{
                path:"appoinment",
                component: AppoinmentManageComponent
            }
        ]
    }
   ,{
        path:"login",
        component:LoginComponent
    }
];
