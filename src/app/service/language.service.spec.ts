import { TestBed } from '@angular/core/testing';

import { TicketService } from './Ticket.service';

describe('LanguageService', () => {
  let service: TicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
