import { Component, input } from '@angular/core';
import { Project } from '../../../interfaces/project';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  project = input<Project>();

}
