import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment } from '../../model/Appointment';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appoinment-manage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appoinment-manage.component.html',
  styleUrl: './appoinment-manage.component.css',
})
export class AppoinmentManageComponent {
  constructor(private http: HttpClient) {
    this.loadAppoinmentsTable();
  }

  public appoinments: Appointment[] = [];

  addAppoinment(appoinment: Appointment) {
    this.http
      .post('http://localhost:8080/appointment/add-appointment', appoinment)
      .subscribe((data) => {
        if (data) {
          this.loadAppoinmentsTable();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  }

  loadAppoinmentsTable() {
    this.http
      .get<Appointment[]>(
        'http://localhost:8080/appointment/view-all-appointments'
      )
      .subscribe((data) => {
        console.log(data);

        this.appoinments = data;
      });
    console.log(this.appoinments);
  }

  //--------delete--------------
  deleteAppointment(id: any) {
    console.log(id + 1);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log(id);

          this.http
            .delete(
              `http://localhost:8080/appointment/delete-appointment/filter?id=${Number.parseInt(
                id.toString()
              )}`
            )
            .subscribe((data) => {
              console.log(data);

              if (data) {
                this.loadAppoinmentsTable();
                swalWithBootstrapButtons.fire({
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  icon: 'success',
                });
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
          });
        }
      });
  }

  public appointment: Appointment = new Appointment(
    0,
    '',
    '',
    '',
    '',
    '',
    '',
    0,
    0,
    0
  );

  public updatedAppointment: Appointment = new Appointment(
    // this.appointment.type,
    // this.appointment.qr,
    // this.appointment.status,
    0,
    '',
    '',
    '',
    '',
    '',
    '',
    0,
    0,
    0
  );

  //-------------------update---------------
  selectAppointment(appointment: Appointment) {
    this.updatedAppointment = appointment;
    console.log(this.updatedAppointment);
  }

  updateAppointment() {
    console.log(this.updatedAppointment);
    this.http
      .put(
        'http://localhost:8080/appointment/update-appointment',
        this.updateAppointment
      )
      .subscribe((data) => {
        if (data) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          this.loadAppoinmentsTable();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  }
}
