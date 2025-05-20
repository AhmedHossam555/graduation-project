import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectModalComponent } from './update-project-modal.component';

describe('UpdateProjectModalComponent', () => {
  let component: UpdateProjectModalComponent;
  let fixture: ComponentFixture<UpdateProjectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProjectModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
