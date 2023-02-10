import { Type } from '@angular/core';

export interface IDynamicLoader {
  data: any;
  component: Type<any>;
}
