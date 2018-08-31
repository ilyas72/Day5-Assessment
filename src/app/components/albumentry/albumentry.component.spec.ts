import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumentryComponent } from './albumentry.component';

describe('AlbumentryComponent', () => {
  let component: AlbumentryComponent;
  let fixture: ComponentFixture<AlbumentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
