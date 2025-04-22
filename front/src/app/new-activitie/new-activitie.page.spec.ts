import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewActivitiePage } from './new-activitie.page';

describe('NewActivitiePage', () => {
  let component: NewActivitiePage;
  let fixture: ComponentFixture<NewActivitiePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewActivitiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
