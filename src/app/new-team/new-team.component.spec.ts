import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeamComponent } from './new-team.component';

describe('NewTeamComponent', () => {
  let component: NewTeamComponent;
  let fixture: ComponentFixture<NewTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTeamComponent]
    });
    fixture = TestBed.createComponent(NewTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
