import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDataTableComponent } from './category-data-table.component';

describe('CategoryDataTableComponent', () => {
  let component: CategoryDataTableComponent;
  let fixture: ComponentFixture<CategoryDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
