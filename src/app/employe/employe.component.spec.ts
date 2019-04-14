import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeComponent } from './employe.component';

describe('EmployeComponent', () => {
    beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeComponent ],
      imports: [
        BrowserAnimationsModule
      ]
    });
  });



    it('Employe Component should be created', () => {
    const fixture = TestBed.createComponent(EmployeComponent);
    const employeComponent = fixture.debugElement.componentInstance;
    expect(employeComponent).toBeTruthy();
  });
});
