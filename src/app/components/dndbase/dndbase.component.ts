import { Component, OnInit, ComponentFactoryResolver, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { BaseComponent } from '../component-base/component-base.component';
import { DynamicComponentService } from '../dynamic-component.service';

@Component({
  selector: 'app-dndbase',
  templateUrl: './dndbase.component.html',
  styleUrls: ['./dndbase.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DNDBaseComponent extends BaseComponent {

  constructor(
    dynamicComponentService: DynamicComponentService,
    componentFactoryResolver: ComponentFactoryResolver,
    private cdf: ChangeDetectorRef) {
    super(dynamicComponentService, componentFactoryResolver);
  }

  remove(event) {
    this.change(event);
  }
  change(event) {
    this.ngAfterContentChecked();
    this.cdf.detectChanges();
    console.log(event);
  }
}
