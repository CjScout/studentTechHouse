import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyattComponent } from './wyatt.component';

describe('WyattComponent', () => {
  let component: WyattComponent;
  let fixture: ComponentFixture<WyattComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WyattComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WyattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
