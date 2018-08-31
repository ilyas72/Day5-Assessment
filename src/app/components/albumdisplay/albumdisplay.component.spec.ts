import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumdisplayComponent } from './albumdisplay.component';

describe('AlbumdisplayComponent', () => {
  let component: AlbumdisplayComponent;
  let fixture: ComponentFixture<AlbumdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
