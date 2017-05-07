import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommanagerListComponent } from './roommanager-list.component';

describe('RoommanagerListComponent', () => {
  let component: RoommanagerListComponent;
  let fixture: ComponentFixture<RoommanagerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoommanagerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommanagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
