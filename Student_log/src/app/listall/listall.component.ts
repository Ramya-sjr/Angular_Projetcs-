import { Component, OnInit } from '@angular/core';
import { HttpClientService,Student } from '../service/http-client.service';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class ListallComponent implements OnInit {

  students:Student;

  constructor(private httpClient:HttpClientService) { }

  ngOnInit() {

    this.httpClient.getStudents().subscribe(response =>this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response)
{
    this.students=response;
}
}
