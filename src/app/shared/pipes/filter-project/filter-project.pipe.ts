import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../../interfaces/project';

@Pipe({
  name: 'filterProject',
  standalone: true
})
export class FilterProjectPipe implements PipeTransform {

  transform(value: Project[], searchValue:string): Project[] {
    if (!value || !searchValue) {
      return value;
    }
    value = value.filter((project:Project) => {
      return project.name.toLowerCase().includes(searchValue.toLowerCase());
    })
    return value;
  }

}
