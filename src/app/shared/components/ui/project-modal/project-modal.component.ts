import { Component } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [ReactiveFormsModule,CalendarModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
   
  

  // project form
  projectForm = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'description': new FormControl(null, [Validators.required]),
    'start_date': new FormControl(null,[Validators.required]),
    'end_date': new FormControl(null,[Validators.required]),

  });
  

  // Format Data

  private formatDate(date: Date | null): string | null {
  if (!date) return null;
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
  }

  // on  Create Project
  createProject(){
  const raw:any = this.projectForm.value;
  const payload = {
    ...raw,
    start_date: this.formatDate(raw.start_date),
    end_date: this.formatDate(raw.end_date),
  };
  console.log(payload);
  
 }
  
}
