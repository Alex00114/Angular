import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypelistComponent } from './typelist.component';

describe('TypelistComponent', () => {
  let component: TypelistComponent;
  let fixture: ComponentFixture<TypelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypelistComponent]
    });
    fixture = TestBed.createComponent(TypelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
