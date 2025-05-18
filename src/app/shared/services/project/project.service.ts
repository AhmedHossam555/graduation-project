import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private _httpClient:HttpClient) { }

  createProject(x:any):Observable<any>{
    return this._httpClient.post("http://localhost:3000/api/v1/project",x);
  }
  getAllProject():Observable<any>{
    return this._httpClient.get("http://localhost:3000/api/v1/project");
  }
}


// created_at
// : 
// "2025-05-18T08:32:49.848Z"
// deleted_at
// : 
// null
// description
// : 
// null
// end_date
// : 
// null
// id
// : 
// 3
// name
// : 
// "test4"
// start_date
// : 
// "2025-05-18"
// updated_at
// : 
// "2025-05-18T08:32:49.848Z"