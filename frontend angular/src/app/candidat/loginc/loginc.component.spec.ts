import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogincComponent } from './loginc.component';



describe('LoginComponent', () => {
  let component: LogincComponent;
  let fixture: ComponentFixture<LogincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
