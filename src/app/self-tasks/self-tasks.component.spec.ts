import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfTasksComponent } from './self-tasks.component';

describe('SelfTasksComponent', () => {
  let component: SelfTasksComponent;
  let fixture: ComponentFixture<SelfTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
