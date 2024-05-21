import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConteudoAtividadePage } from './conteudo-atividade.page';

describe('ConteudoAtividadePage', () => {
  let component: ConteudoAtividadePage;
  let fixture: ComponentFixture<ConteudoAtividadePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoAtividadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
