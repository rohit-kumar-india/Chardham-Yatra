import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KedarnathHelicopterPackageComponent } from './kedarnath-helicopter-package.component';

describe('KedarnathHelicopterPackageComponent', () => {
  let component: KedarnathHelicopterPackageComponent;
  let fixture: ComponentFixture<KedarnathHelicopterPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KedarnathHelicopterPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KedarnathHelicopterPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
