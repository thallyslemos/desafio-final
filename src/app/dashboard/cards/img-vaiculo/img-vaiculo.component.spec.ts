import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgVaiculoComponent } from './img-vaiculo.component';

describe('ImgVaiculoComponent', () => {
  let component: ImgVaiculoComponent;
  let fixture: ComponentFixture<ImgVaiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgVaiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgVaiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
