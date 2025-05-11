import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar',
  standalone: true,
  imports: [NgFor,NgStyle],
  templateUrl: './horizontal-bar.component.html',
  styleUrl: './horizontal-bar.component.scss'
})
export class HorizontalBarComponent {
workTypes = [
  { label: 'Task', value: 100, icon: 'pi pi-check-square text-blue-600' },
  { label: 'Epic', value: 0, icon: 'pi pi-bolt text-purple-600' },
  { label: 'Bug', value: 0, icon: 'pi pi-exclamation-triangle text-red-500' },
  { label: 'Story', value: 0, icon: 'pi pi-bookmark text-green-500' },
  { label: 'Subtask', value: 0, icon: 'pi pi-th-large text-cyan-500' }
];
}
