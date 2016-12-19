import { JokeService } from './joke.service';
import { TestBed, inject, async } from '@angular/core/testing';
import { BaseRequestOptions, Http, RequestMethod, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

let jokeService: JokeService;
let mockBackend: MockBackend;

describe(`Service: JokeService`, () => {

   beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JokeService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  beforeEach(inject([MockBackend, Http],
    (mb: MockBackend, http: Http) => {
      mockBackend = mb;
      jokeService = new JokeService(http);
    }));

    it(`should have a service`, () => {
        expect(jokeService).toBeTruthy();
    });

    it(`should return expected joke`, async(() => {
        let joke = 'fake joke 2' ;

        mockBackend.connections.subscribe((connection: MockConnection) => {
            expect(connection.request.method).toEqual(RequestMethod.Get);
            expect(connection.request.url).toEqual(`http://api.icndb.com/jokes/random`);

            connection.mockRespond(new Response(new ResponseOptions({
                body: {value: {joke}}
            })));
        });


        jokeService.getJoke().subscribe(result => {
           expect(result).toEqual(joke);
        });
    }));

});
