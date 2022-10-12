import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnComponent } from './dn.component';

describe('DnComponent', () => {
  let component: DnComponent;
  let fixture: ComponentFixture<DnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
