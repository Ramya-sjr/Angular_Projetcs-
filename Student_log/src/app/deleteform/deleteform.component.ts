import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-deleteform',
  templateUrl: './deleteform.component.html',
  styleUrls: ['./deleteform.component.css']
})
export class DeleteformComponent implements OnInit {

  id: any;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  deleteStudent() {

    this.httpClientService.deleteStudent(this.id).subscribe();
    alert('Student Record deleted...');
  }

}
