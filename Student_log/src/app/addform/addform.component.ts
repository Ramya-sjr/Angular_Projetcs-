import { Component, OnInit } from '@angular/core';
import { HttpClientService, Student } from '../service/http-client.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})

export class AddformComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;

  user: Student = new Student();

  constructor(private httpClientService: HttpClientService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      dept: ['', Validators.required],
      email: ['', Validators.required],
    })

  }

   onSubmit(form: NgForm) {
    
    this.submitted = true;
    this.user.studentName=this.registerForm.value.name;
    this.user.studentDept=this.registerForm.value.dept;
    this.user.studentEmail=this.registerForm.value.email;

    this.httpClientService.createStudent(this.user).subscribe();
   
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

 
}


