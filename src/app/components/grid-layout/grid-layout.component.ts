import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { BaseComponent } from '../component-base/component-base.component';
import { DynamicComponentService } from '../dynamic-component.service';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css']
})
export class GridLayoutComponent extends BaseComponent {

  constructor(
    dynamicComponentService: DynamicComponentService,
    componentFactoryResolver: ComponentFactoryResolver) {
    super(dynamicComponentService, componentFactoryResolver);
  }

}
