// import { JokeService } from './joke.service';
// import { TestBed, inject, async } from '@angular/core/testing';
// import { BaseRequestOptions, Http, RequestMethod, ResponseOptions, Response } from '@angular/http';
// import { MockBackend, MockConnection } from '@angular/http/testing';

// const fakeJoke = {
//     'type': 'success',
//     'value': {
//         'id': 404,
//         'joke': 'FAKE_JOKE',
//         'categories': []
//     }
// };

// describe(`Service: JokeService`, () => {
//     let jokeService: JokeService;
//     let mockBackend: MockBackend;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             providers: [
//                 JokeService,
//                 {
//                     provide: Http,
//                     useFactory: (connectionBackend, options) => {
//                         return new Http(connectionBackend, options);
//                     },
//                     deps: [MockBackend, BaseRequestOptions]
//                 },
//                 MockBackend,
//                 BaseRequestOptions,
//             ]
//         });
//     });

//     beforeEach(inject([MockBackend, Http],
//         (mb: MockBackend, http: Http) => {
//             mockBackend = mb;
//             jokeService = new JokeService(http);
//         }));

//     it(`should have a service`, () => {
//         expect(jokeService).toBeTruthy();
//     });

//     it(`should return expected joke`, async(() => {
//         mockBackend.connections.subscribe((connection: MockConnection) => {
//             expect(connection.request.method).toEqual(RequestMethod.Get);
//             expect(connection.request.url).toEqual(`http://api.icndb.com/jokes/random`);

//             connection.mockRespond(new Response(new ResponseOptions({
//                 body: fakeJoke
//             })));
//         });


//         jokeService.getJoke().subscribe(result => {
//             expect(result).toEqual(fakeJoke.value.joke);
//         });
//     }));

// });
