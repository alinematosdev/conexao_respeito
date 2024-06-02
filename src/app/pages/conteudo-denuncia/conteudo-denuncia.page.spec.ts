import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConteudoDenunciaPage } from './conteudo-denuncia.page';

describe('ConteudoDenunciaPage', () => {
  let component: ConteudoDenunciaPage;
  let fixture: ComponentFixture<ConteudoDenunciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoDenunciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
