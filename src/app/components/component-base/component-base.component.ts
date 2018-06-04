import { OnInit, ViewChildren, Input, ComponentFactoryResolver, QueryList, ViewChild, AfterContentChecked } from '@angular/core';
import { DynamicComponentDirective } from '../dynamic-component.directive';
import { ComponentModel } from '../ComponentModel';
import { DynamicComponentService } from '../dynamic-component.service';

export class BaseComponent implements AfterContentChecked {
  @ViewChildren(DynamicComponentDirective)
  componentHosts: QueryList<DynamicComponentDirective>;

  @Input()
  model: ComponentModel;

  constructor(
    private dynamicComponentService: DynamicComponentService,
    private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngAfterContentChecked() {
    if (!this.componentHosts) {
      return;
    }
    console.log(this.model);
    const hosts = this.componentHosts.toArray();
    for (let index = 0; index < hosts.length; index++) {
      const host = hosts[index];

      // if (!this.model.children[index]) { continue; }

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        this.dynamicComponentService.getComponent(this.model.children[index].componentName)
      );

      const viewContainerRef = host.viewContainerRef;

      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as any).model = this.model.children[index];
      componentRef.changeDetectorRef.detectChanges();
    }
  }
}
