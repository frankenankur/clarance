/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComponentTreeService } from './component-tree.service';

describe('Service: ComponentTree', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentTreeService]
    });
  });

  it('should ...', inject([ComponentTreeService], (service: ComponentTreeService) => {
    expect(service).toBeTruthy();
  }));
});
