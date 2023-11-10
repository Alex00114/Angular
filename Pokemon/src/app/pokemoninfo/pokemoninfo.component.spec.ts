import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoninfoComponent } from './pokemoninfo.component';

describe('PokemoninfoComponent', () => {
  let component: PokemoninfoComponent;
  let fixture: ComponentFixture<PokemoninfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemoninfoComponent]
    });
    fixture = TestBed.createComponent(PokemoninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
