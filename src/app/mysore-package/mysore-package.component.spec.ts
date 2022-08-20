import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysorePackageComponent } from './mysore-package.component';

describe('MysorePackageComponent', () => {
  let component: MysorePackageComponent;
  let fixture: ComponentFixture<MysorePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysorePackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysorePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
