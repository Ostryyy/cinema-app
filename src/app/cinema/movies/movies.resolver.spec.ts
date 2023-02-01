import { TestBed } from '@angular/core/testing';

import { MoviesResolver } from './movies.resolver';

describe('MoviesResolver', () => {
  let resolver: MoviesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MoviesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
