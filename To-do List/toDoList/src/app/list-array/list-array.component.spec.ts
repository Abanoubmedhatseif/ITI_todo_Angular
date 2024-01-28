import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArrayComponent } from './list-array.component';

describe('ListArrayComponent', () => {
  let component: ListArrayComponent;
  let fixture: ComponentFixture<ListArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
