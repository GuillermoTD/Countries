import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonLoadingCountriesComponent } from './skeleton-loading-countries.component';

describe('SkeletonLoadingCountriesComponent', () => {
  let component: SkeletonLoadingCountriesComponent;
  let fixture: ComponentFixture<SkeletonLoadingCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonLoadingCountriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkeletonLoadingCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
