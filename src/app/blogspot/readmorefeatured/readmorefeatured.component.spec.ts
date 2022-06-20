import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmorefeaturedComponent } from './readmorefeatured.component';

describe('ReadmorefeaturedComponent', () => {
  let component: ReadmorefeaturedComponent;
  let fixture: ComponentFixture<ReadmorefeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmorefeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmorefeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
