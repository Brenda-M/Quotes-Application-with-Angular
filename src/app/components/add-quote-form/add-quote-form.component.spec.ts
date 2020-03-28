import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuoteFormComponent } from './add-quote-form.component';

describe('AddQuoteFormComponent', () => {
  let component: AddQuoteFormComponent;
  let fixture: ComponentFixture<AddQuoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
