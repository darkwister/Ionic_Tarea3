import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateNumbersPage } from './translate-numbers.page';

describe('TranslateNumbersPage', () => {
  let component: TranslateNumbersPage;
  let fixture: ComponentFixture<TranslateNumbersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
