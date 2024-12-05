import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonLoadingCountryComponent } from './skeleton-loading-country.component';

describe('SkeletonLoadingCountryComponent', () => {
  let component: SkeletonLoadingCountryComponent;
  let fixture: ComponentFixture<SkeletonLoadingCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonLoadingCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkeletonLoadingCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
