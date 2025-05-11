import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTeamWorkComponent } from './bar-team-work.component';

describe('BarTeamWorkComponent', () => {
  let component: BarTeamWorkComponent;
  let fixture: ComponentFixture<BarTeamWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarTeamWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarTeamWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
