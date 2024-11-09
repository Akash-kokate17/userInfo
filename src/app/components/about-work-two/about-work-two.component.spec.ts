import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWorkTwoComponent } from './about-work-two.component';

describe('AboutWorkTwoComponent', () => {
  let component: AboutWorkTwoComponent;
  let fixture: ComponentFixture<AboutWorkTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWorkTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWorkTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
