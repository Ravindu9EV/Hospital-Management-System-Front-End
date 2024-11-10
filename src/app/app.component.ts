import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { initFlowbite, Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'
import type { InstanceOptions } from 'flowbite';
import { DashboardComponent } from './page/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Hospital-Manage-front-end';

  ngOnInit(): void {
      initFlowbite()
  }
}
