import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Enviroment/enviroment';
import { Project } from '../../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private _httpClient:HttpClient) { }

  // create project 
  createProject(projectItem:Project):Observable<any>{
    return this._httpClient.post(`${environment.apiUrl}/project`,projectItem);
  }

  // get all project
  getAllProject():Observable<any>{
    return this._httpClient.get(`${environment.apiUrl}/project`);
  }
  
  // delete one project
  softDeleteProject(id:number):Observable<any>{
    return this._httpClient.delete(`${environment.apiUrl}/project/soft/${id}`);
  }

  // update project
  updateProject(id:number, projectItem:Project):Observable<any>{
    return this._httpClient.patch(`${environment.apiUrl}/project/${id}`,projectItem);
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