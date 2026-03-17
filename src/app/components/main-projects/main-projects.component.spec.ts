import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProjectsComponent } from './main-projects.component';

describe('MainProjectsComponent', () => {
  let component: MainProjectsComponent;
  let fixture: ComponentFixture<MainProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
