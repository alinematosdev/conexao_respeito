import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarAtividadePage } from './adicionar-atividade.page';

describe('AdicionarAtividadePage', () => {
  let component: AdicionarAtividadePage;
  let fixture: ComponentFixture<AdicionarAtividadePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarAtividadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
