import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCelComponent } from './table-cel.component';

describe('TableCelComponent', () => {
  let component: TableCelComponent;
  let fixture: ComponentFixture<TableCelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
