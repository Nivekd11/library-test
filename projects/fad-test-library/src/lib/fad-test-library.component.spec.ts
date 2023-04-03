import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadTestLibraryComponent } from './fad-test-library.component';

describe('FadTestLibraryComponent', () => {
  let component: FadTestLibraryComponent;
  let fixture: ComponentFixture<FadTestLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FadTestLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FadTestLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
