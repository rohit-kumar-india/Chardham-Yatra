import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GujratPackageComponent } from './gujrat-package.component';

describe('GujratPackageComponent', () => {
  let component: GujratPackageComponent;
  let fixture: ComponentFixture<GujratPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GujratPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GujratPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
