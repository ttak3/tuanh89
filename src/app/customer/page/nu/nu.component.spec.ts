import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuComponent } from './nu.component';

describe('NuComponent', () => {
  let component: NuComponent;
  let fixture: ComponentFixture<NuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
