import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplyPage } from './multiply.page';

describe('MultiplyPage', () => {
  let component: MultiplyPage;
  let fixture: ComponentFixture<MultiplyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
