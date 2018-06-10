import { TestBed, inject } from '@angular/core/testing';

import { WorkshopServiceService } from './workshop-service.service';

describe('WorkshopServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkshopServiceService]
    });
  });

  it('should be created', inject([WorkshopServiceService], (service: WorkshopServiceService) => {
    expect(service).toBeTruthy();
  }));
});
