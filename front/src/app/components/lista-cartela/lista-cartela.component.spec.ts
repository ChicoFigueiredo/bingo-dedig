import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCartelaComponent } from './lista-cartela.component';

describe('ListaCartelaComponent', () => {
  let component: ListaCartelaComponent;
  let fixture: ComponentFixture<ListaCartelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCartelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCartelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
