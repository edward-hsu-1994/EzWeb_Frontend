import { DynamicComponentService } from './../dynamic-component.service';
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { BaseComponent } from '../component-base/component-base.component';

@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.css']
})
export class BlankLayoutComponent extends BaseComponent {

  constructor(
    dynamicComponentService: DynamicComponentService,
    componentFactoryResolver: ComponentFactoryResolver) {
    super(dynamicComponentService, componentFactoryResolver);
  }


}
