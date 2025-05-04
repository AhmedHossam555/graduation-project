import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintStartModelComponent } from './sprint-start-model.component';

describe('SprintStartModelComponent', () => {
  let component: SprintStartModelComponent;
  let fixture: ComponentFixture<SprintStartModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SprintStartModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SprintStartModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
