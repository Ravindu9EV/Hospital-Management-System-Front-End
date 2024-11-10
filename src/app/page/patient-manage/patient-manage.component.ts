import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { Patient } from '../../model/Patient';

// or via CommonJS


@Component({
  selector: 'app-patient-manage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-manage.component.html',
  styleUrl: './patient-manage.component.css'
})
export class PatientManageComponent {

  public patientList:Patient[]=[];

  constructor(private http:HttpClient){
    this.loadPatient()
    // Swal.fire({
    //   title: 'Error!',
    //   text: 'Do you want to continue',
    //   icon: 'error',
    //   confirmButtonText: 'Cool'
    // })
  }
  loadPatient(){
    this.http.get<Patient[]>("http://localhost:8080/patient/get-all").subscribe(data=>{
      console.log(data);
      this.patientList=data;
    //  data.forEach(p=>{
    //   // this.patientList.push(new Patient(
    //   //  p.getId(),                
    //   //   p.getName(),
    //   //   p.getAddress(),
    //   //   p.getBloodGroup(),
    //   //   p.getCategory(),
    //   //   p.getGender(),
    //   //   p.getContact(),
    //   //   p.getNote(),
    //   //   p.getAge(),
    //   //   p.getAllergies()
    //   // ))
    //  })
    })
    console.log(this.patientList);
    
  }

  deletePatient(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/patient/delete-by-id/${id}`).subscribe(()=>{
          this.loadPatient()
        })
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }


 
}
