import { TestBed } from '@angular/core/testing';

import { ServioComidaService } from './servio-comida.service';

describe('ServioComidaService', () => {
  let service: ServioComidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServioComidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
