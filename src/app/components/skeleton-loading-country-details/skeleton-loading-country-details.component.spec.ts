import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonLoadingCountryDetailsComponent } from './skeleton-loading-country-details.component';

describe('SkeletonLoadingCountryDetailsComponent', () => {
  let component: SkeletonLoadingCountryDetailsComponent;
  let fixture: ComponentFixture<SkeletonLoadingCountryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonLoadingCountryDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkeletonLoadingCountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
