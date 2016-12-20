import { JokeComponent } from './joke.component';
import { HttpModule } from '@angular/http';
import { JokeService } from '../joke.service';
import { async, fakeAsync, tick, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


const fakeJoke = 'fake Chuck Norris joke.';

describe(`Component: JokeComponent`, () => {
  let jokeService: any;
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {

    // let fakeJokeService = {
    //   getJoke: () => Observable.of(fakeJoke)
    // };
    // component = new JokeComponent(jokeService);

    TestBed.configureTestingModule({
      declarations: [JokeComponent],
      imports: [HttpModule],
      providers: [
        JokeService
        // { provide: JokeService, useValue: fakeJokeService }
      ]
    });

    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;
    jokeService = TestBed.get(JokeService);

  });

  it(`should add 1 + 1`, () => {
    expect(1 + 1).toEqual(2);
  });

  it(`should have the correct title `, () => {
    expect(component.title).toEqual('Chuck Norris Jokes');
  });

  it(`should set joke property on component initialisation`, () => {
    spyOn(jokeService, 'getJoke').and.returnValues(
      Observable.of('first joke'));

    fixture.detectChanges();

    expect(el.textContent).toContain('first joke');
  });


  it(`should get next quote on click`, fakeAsync(() => {
    spyOn(jokeService, 'getJoke').and.returnValues(
      Observable.of('first joke'),
      Observable.of('second joke').timeout(2000));

    fixture.detectChanges();
    expect(el.textContent).toContain('first joke');
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    tick(3000);
    fixture.detectChanges();
    expect(el.textContent).toContain('second joke');

  }));

  it(`should get next quote on click`, async(() => {
    spyOn(jokeService, 'getJoke').and.returnValues(
      Observable.of('first joke'),
      Observable.of('second joke'));

    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('button')).nativeElement;

    button.click();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.textContent).toContain('second joke');
    });
  }));

});
