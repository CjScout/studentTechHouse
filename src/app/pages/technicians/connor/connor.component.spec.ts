import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnorComponent } from './connor.component';

describe('ConnorComponent', () => {
  let component: ConnorComponent;
  let fixture: ComponentFixture<ConnorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
