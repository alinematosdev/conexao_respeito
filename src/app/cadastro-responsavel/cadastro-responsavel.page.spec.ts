import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroResponsavelPage } from './cadastro-responsavel.page';

describe('CadastroResponsavelPage', () => {
  let component: CadastroResponsavelPage;
  let fixture: ComponentFixture<CadastroResponsavelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroResponsavelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
