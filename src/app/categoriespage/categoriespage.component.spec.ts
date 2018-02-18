import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriespageComponent } from './categoriespage.component';

describe('CategoriespageComponent', () => {
  let component: CategoriespageComponent;
  let fixture: ComponentFixture<CategoriespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
