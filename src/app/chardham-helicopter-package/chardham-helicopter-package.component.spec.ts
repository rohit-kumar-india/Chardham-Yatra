import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChardhamHelicopterPackageComponent } from './chardham-helicopter-package.component';

describe('ChardhamHelicopterPackageComponent', () => {
  let component: ChardhamHelicopterPackageComponent;
  let fixture: ComponentFixture<ChardhamHelicopterPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChardhamHelicopterPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChardhamHelicopterPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
