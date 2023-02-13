import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidTasksComponent } from './kid-tasks.component';

describe('KidTasksComponent', () => {
  let component: KidTasksComponent;
  let fixture: ComponentFixture<KidTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
