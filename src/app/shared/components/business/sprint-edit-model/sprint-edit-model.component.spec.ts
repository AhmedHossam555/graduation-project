import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintEditModelComponent } from './sprint-edit-model.component';

describe('SprintEditModelComponent', () => {
  let component: SprintEditModelComponent;
  let fixture: ComponentFixture<SprintEditModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SprintEditModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SprintEditModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
