import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSidebarComponent } from './toggle-sidebar.component';

describe('ToggleSidebarComponent', () => {
  let component: ToggleSidebarComponent;
  let fixture: ComponentFixture<ToggleSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
