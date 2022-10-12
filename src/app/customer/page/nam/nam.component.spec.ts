import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamComponent } from './nam.component';

describe('NamComponent', () => {
  let component: NamComponent;
  let fixture: ComponentFixture<NamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
