// /* tslint:disable:no-unused-variable */

// import { TestBed, async, inject } from '@angular/core/testing';
// import { PaymentService } from './payment.service';
// import { Http, HttpModule, BaseRequestOptions, RequestMethod, ResponseOptions, Response } from '@angular/http';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { Payment } from './payment';

// let paymentService: PaymentService;
// let mockBackend: MockBackend;

// describe('PaymentService', () => {

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         HttpModule
//       ],
//       providers: [
//         PaymentService,
//         MockBackend,
//         BaseRequestOptions,
//         {
//           provide: Http,
//           useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
//           deps: [MockBackend, BaseRequestOptions]
//         }
//       ]
//     });
//   }));

//   beforeEach(inject([MockBackend, Http],
//     (mb: MockBackend, http: Http) => {
//       mockBackend = mb;
//       paymentService = new PaymentService(http);
//     }));

//   it('should ...', inject([PaymentService, Http], (service: PaymentService, http: Http) => {
//     expect(service).toBeTruthy();
//   }));

//   it('should return observable with payment and its id', async(() => {
//     let fakePayment: Payment = { amount: 1, creditCardNumber: '1111222233334444' };
//     let expected: Payment = { id: 1, amount: 1, creditCardNumber: '1111222233334444' };

//     mockBackend.connections.subscribe((connection: MockConnection) => {
//       expect(connection.request.method).toEqual(RequestMethod.Post);
//       expect(connection.request.url).toEqual('FAKE_END_POINT');
//       connection.mockRespond(new Response(new ResponseOptions({
//         body: expected
//       })));
//     });

//     paymentService.processPayment(fakePayment).subscribe(result => {
//       expect(result).toEqual(expected);
//     });
//   }));

// });
