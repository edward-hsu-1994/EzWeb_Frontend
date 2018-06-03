import { OnInit, ViewChildren, Input, ComponentFactoryResolver, QueryList, ViewChild, AfterViewInit } from '@angular/core';
import { DynamicComponentDirective } from '../dynamic-component.directive';
import { ComponentModel } from '../ComponentModel';
import { DynamicComponentService } from '../dynamic-component.service';

export class BaseComponent implements AfterViewInit {
  @ViewChildren(DynamicComponentDirective)
  componentHosts: QueryList<DynamicComponentDirective>;

  @Input()
  model: ComponentModel;

  constructor(
    private dynamicComponentService: DynamicComponentService,
    private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngAfterViewInit() {
    console.log(this.componentHosts);

    if (!this.componentHosts) {
      return;
    }

    const hosts = this.componentHosts.toArray();
    for (let index = 0; index < hosts.length; index++) {
      const host = hosts[index];

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
