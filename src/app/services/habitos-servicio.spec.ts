import { TestBed } from '@angular/core/testing';

import { HabitosServicio } from './habitos-servicio';

describe('HabitosServicio', () => {
  let service: HabitosServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitosServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
