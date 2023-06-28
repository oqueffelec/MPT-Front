import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRanksComponent } from './team-ranks.component';

describe('TeamRanksComponent', () => {
  let component: TeamRanksComponent;
  let fixture: ComponentFixture<TeamRanksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamRanksComponent]
    });
    fixture = TestBed.createComponent(TeamRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
