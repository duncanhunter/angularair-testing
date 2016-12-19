import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { PaymentFormComponent } from './payment-form.component';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

xdescribe('PaymentFormComponent', () => {
  let component: PaymentFormComponent;
  let fixture: ComponentFixture<PaymentFormComponent>;
  let paymentService: PaymentService;
  let mockBackend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentFormComponent],
      imports: [FormsModule],
      providers: [
        PaymentService,
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


  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([PaymentService, MockBackend], (ps: PaymentService, mb: MockBackend) => {
    paymentService = ps;
    mockBackend = mb;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should call ProcessPayment on the  `, () => {
    let fakePayment: Payment = {amount: 1, creditCardNumber: '1111222233334444'};
    let expected: Payment = {id: 1, amount: 1, creditCardNumber: '1111222233334444'};
    component.payment = fakePayment;

    spyOn(paymentService, 'processPayment')
      .and.returnValue(Observable.of(expected));

    component.processPayment();

    expect(paymentService.processPayment).toHaveBeenCalled();
    expect(paymentService.processPayment).toHaveBeenCalledTimes(1);
    expect(paymentService.processPayment).toHaveBeenCalledWith(fakePayment);
    expect(component.payment).toEqual(expected);


  });
});
