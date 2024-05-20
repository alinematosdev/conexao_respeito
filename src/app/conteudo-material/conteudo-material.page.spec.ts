import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConteudoMaterialPage } from './conteudo-material.page';

describe('ConteudoMaterialPage', () => {
  let component: ConteudoMaterialPage;
  let fixture: ComponentFixture<ConteudoMaterialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
