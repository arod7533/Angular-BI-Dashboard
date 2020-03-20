import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnutChartComponent } from './dnut-chart.component';

describe('DnutChartComponent', () => {
  let component: DnutChartComponent;
  let fixture: ComponentFixture<DnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
