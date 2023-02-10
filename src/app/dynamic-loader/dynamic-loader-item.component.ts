import { Type } from '@angular/core';

export class DynamicLoaderItem {
  constructor(public component: Type<any>, public data: any) {}
}
