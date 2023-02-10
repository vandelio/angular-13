import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { DynamicComponentDirective } from '../dynamic-component.directive';
import { DynamicLoaderItem } from './dynamic-loader-item.component';
import { IDynamicLoader } from './idynamic-loader';

@Component({
  selector: 'dynamic-loader',
  template: `
  <div class="ad-banner-example">
    <h3>Dynamic component</h3>
    <ng-template dynamicComponent></ng-template>
  </div>
`,
  styleUrls: ['./dynamic-loader.component.css'],
})
export class DynamicLoader implements OnChanges {
  @Input() loadableComponents: DynamicLoaderItem[] = [];
  @Input() selectedComponent: string = '';

  @ViewChild(DynamicComponentDirective)
  dynamicComponent!: DynamicComponentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnChanges(): void {
    console.log('loooooad');
    this.loadComponent();
  }
  loadComponent() {
    const componentItem = this.loadableComponents.filter(
      (component) =>
        component.data.componentIdentifyer === this.selectedComponent
    )[0];
    const componentItemComponent = componentItem.component;
    const componentItemData = componentItem.data;

    console.log(componentItemComponent);
    const viewContainerRef = this.dynamicComponent.viewContainerRef;
    viewContainerRef.clear();

    const factory = this.componentFactoryResolver.resolveComponentFactory(
      componentItemComponent
    );

    const componentRef =
      viewContainerRef.createComponent<IDynamicLoader>(factory);
    (componentRef.instance as IDynamicLoader).data = componentItemData;
  }
}
