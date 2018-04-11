import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouthrComponent } from './abouthr.component';

describe('AbouthrComponent', () => {
  let component: AbouthrComponent;
  let fixture: ComponentFixture<AbouthrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbouthrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouthrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
