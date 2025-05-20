import { Component, inject, Inject, PLATFORM_ID, signal } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { FlowbiteService } from './shared/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { WorkflowComponent } from "./shared/components/business/workflow/workflow.component";
import { LoaderComponent } from "./shared/loader/loader/loader.component";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorkflowComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'graduation-project';
  private _platForm = inject(PLATFORM_ID);

  constructor(private _flowbiteService: FlowbiteService){
      
  }
  ngOnInit(): void {


    if(isPlatformBrowser(this._platForm)){
        const loader =document.getElementById("loader-first") as HTMLElement;
        if(loader){
          setTimeout(()=> loader.remove(), 1000);
        }
      
    }
    

    this._flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });

  }
}
