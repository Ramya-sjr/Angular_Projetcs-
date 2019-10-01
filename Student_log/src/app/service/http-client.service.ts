import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Student{
    public studentId:number;
    public studentName:string;
    public studentDept:string;
    public studentEmail:string;
  
    constructor() {}

  }

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
  
  public getStudents(){
      return this.httpClient.get<Student[]>('http://localhost:8080/listall');
  }

  public createStudent(Student) {
    console.log(Student)
    return this.httpClient.post("http://localhost:8080/insert", Student);
  }

  public deleteStudent(id: any){
    
    return this.httpClient.delete('http://localhost:8080/delete/'+id);
  }

  public searchStudent(id: any){
    return this.httpClient.get('http://localhost:8080/search/'+id)
  }



}

