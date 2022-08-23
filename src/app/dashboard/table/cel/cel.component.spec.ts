import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelComponent } from './cel.component';

describe('CelComponent', () => {
  let component: CelComponent;
  let fixture: ComponentFixture<CelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
