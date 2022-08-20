import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KerlaPackageComponent } from './kerla-package.component';

describe('KerlaPackageComponent', () => {
  let component: KerlaPackageComponent;
  let fixture: ComponentFixture<KerlaPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KerlaPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KerlaPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
