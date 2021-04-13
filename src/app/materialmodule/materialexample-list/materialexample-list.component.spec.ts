import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialexampleListComponent } from './materialexample-list.component';

describe('MaterialexampleListComponent', () => {
  let component: MaterialexampleListComponent;
  let fixture: ComponentFixture<MaterialexampleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialexampleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialexampleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
