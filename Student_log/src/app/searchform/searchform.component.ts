import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
   
 

  student: any;
  studentInfo: any;
  novalue=false;
  containsdata=false;

  constructor(private httpClient: HttpClientService) { }

  ngOnInit() {
  }

searchStudent(){
  this.httpClient.searchStudent(this.studentInfo).subscribe(response =>this.handleSuccessfulResponse(response));
}

handleSuccessfulResponse(response)
{
  this.student=response;
  console.log(this.student)
 
  if(this.student==null && this.studentInfo==undefined){
    this.novalue=true;
 
  }
  else{
    this.containsdata=true;
    this.novalue=false;
  }
    
}

}
