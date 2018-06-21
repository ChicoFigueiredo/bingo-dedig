import { TestBed, inject } from '@angular/core/testing';

import { BroadcastBingoService } from './broadcast-bingo.service';

describe('BroadcastBingoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastBingoService]
    });
  });

  it('should be created', inject([BroadcastBingoService], (service: BroadcastBingoService) => {
    expect(service).toBeTruthy();
  }));
});
