import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuploadpageComponent } from './formuploadpage.component';

describe('FormuploadpageComponent', () => {
  let component: FormuploadpageComponent;
  let fixture: ComponentFixture<FormuploadpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuploadpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuploadpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
