import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTasksComponent } from './work-tasks.component';

describe('WorkTasksComponent', () => {
  let component: WorkTasksComponent;
  let fixture: ComponentFixture<WorkTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
