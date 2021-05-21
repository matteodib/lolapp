import { TestBed } from '@angular/core/testing';

import { SummonerDataService } from './summoner-data.service';

describe('SummonerDataService', () => {
  let service: SummonerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummonerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
