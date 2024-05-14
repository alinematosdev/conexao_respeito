import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroEstudantePage } from './cadastro-estudante.page';

describe('CadastroEstudantePage', () => {
  let component: CadastroEstudantePage;
  let fixture: ComponentFixture<CadastroEstudantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEstudantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
