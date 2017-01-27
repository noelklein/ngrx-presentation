import { LayoutComponent } from './layout.component';
import { async, TestBed } from '@angular/core/testing';
/* tslint:disable:no-unused-variable */

describe('App: Ref1', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LayoutComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(LayoutComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(LayoutComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(LayoutComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
