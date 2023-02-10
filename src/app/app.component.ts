import { Component, OnInit, VERSION } from '@angular/core';
import { DynamicLoaderService } from './dynamic-loader.service';
import { IDynamicLoader } from './dynamic-loader/idynamic-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  dynamicComponents: IDynamicLoader[] = [];
  selectedComponent: string;
  constructor(private dynamicLoaderService: DynamicLoaderService) {}

  ngOnInit() {
    this.dynamicComponents = this.dynamicLoaderService.getComponents();
  }

  chooseComponent(value) {
    this.selectedComponent = value;
    console.log(value);
  }
}
