import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajasthanPackageComponent } from './rajasthan-package.component';

describe('RajasthanPackageComponent', () => {
  let component: RajasthanPackageComponent;
  let fixture: ComponentFixture<RajasthanPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajasthanPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RajasthanPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
