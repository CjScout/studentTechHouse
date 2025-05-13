import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbhoComponent } from './sbho.component';

describe('SbhoComponent', () => {
  let component: SbhoComponent;
  let fixture: ComponentFixture<SbhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
