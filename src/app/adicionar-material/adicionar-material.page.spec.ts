import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarMaterialPage } from './adicionar-material.page';

describe('AdicionarMaterialPage', () => {
  let component: AdicionarMaterialPage;
  let fixture: ComponentFixture<AdicionarMaterialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
