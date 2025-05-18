import { Component } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  constructor(private _projectService: ProjectService) {

  }

  projectForm = new FormGroup({
    'name': new FormControl(null, [Validators.required])
  })

  createProject(){
    this._projectService.createProject(this.projectForm.value).subscribe({
      next: (res)=>{
        console.log(res);
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
  
}
