import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChardhamPackageComponent } from './chardham-package.component';

describe('ChardhamPackageComponent', () => {
  let component: ChardhamPackageComponent;
  let fixture: ComponentFixture<ChardhamPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChardhamPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChardhamPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
