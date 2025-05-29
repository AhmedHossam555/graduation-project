import { Component, Input, input, output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { Project } from '../../../interfaces/project';

@Component({
  selector: 'app-update-project-modal',
  standalone: true,
  imports: [ReactiveFormsModule,CalendarModule],
  templateUrl: './update-project-modal.component.html',
  styleUrl: './update-project-modal.component.scss'
})
export class UpdateProjectModalComponent  {
  // output signal for update project
  updateValue = output<Project>();
  // this is used to get the project value from the parent component
  projectValue = input<Project>();
  // input  for project id
  id = input<string>();

  /// old project value


  // project form
  projectForm = new FormGroup({
    'name': new FormControl<string | null>(null, [Validators.required]),
    'description': new FormControl<string | null>(null, [Validators.required]),
    'start_date': new FormControl<string | null | Date>(null, [Validators.required]),
    'end_date': new FormControl<string | null | Date>(null, [Validators.required]),
  });
  

    ngOnChanges(changes: SimpleChanges): void {
      if(this.projectValue()){
        this.projectForm.patchValue({
          name: this.projectValue()?.name,
          description: this.projectValue()?.description,
          start_date: this.toDate(this.projectValue()?.start_date),
          end_date: this.toDate(this.projectValue()?.end_date),
        });
      }
  }




// Helper to convert string to Date
toDate(dateStr: string | Date | null | undefined): Date | null {
  if (!dateStr) return null;
  if (dateStr instanceof Date) return dateStr;
  // Accepts "yyyy-mm-dd" or "mm/dd/yyyy"
  if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) {
    // "yyyy-mm-dd"
    return new Date(dateStr);
  }
  if (/^\d{2}\/\d{2}\/\d{4}/.test(dateStr)) {
    // "mm/dd/yyyy"
    const [mm, dd, yyyy] = dateStr.split('/');
    return new Date(+yyyy, +mm - 1, +dd);
  }
  return null;
}

// When submitting, format as mm/dd/yyyy
private formatDate(date: Date | null): string | null {
  if (!date) return null;
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

// update project
updateProject() {
  const raw:any = this.projectForm.value;
  const payload = {
    ...raw,
    start_date: this.formatDate(raw.start_date),
    end_date: this.formatDate(raw.end_date),
  };
  // send payload to API
  this.updateValue.emit(payload);

  // reset form
  this.projectForm.reset();
}
}
