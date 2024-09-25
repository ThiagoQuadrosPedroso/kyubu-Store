import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovProdutosComponent } from './mov-produtos.component';

describe('MovProdutosComponent', () => {
  let component: MovProdutosComponent;
  let fixture: ComponentFixture<MovProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
