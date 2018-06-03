import { BaseComponent } from './../component-base/component-base.component';
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponentService } from '../dynamic-component.service';

@Component({
  selector: 'app-hyper-link',
  templateUrl: './hyper-link.component.html',
  styleUrls: ['./hyper-link.component.css']
})
export class HyperLinkComponent extends BaseComponent {
  url = '#';
  label = '未命名';
  constructor(
    dynamicComponentService: DynamicComponentService,
    componentFactoryResolver: ComponentFactoryResolver) {
    super(dynamicComponentService, componentFactoryResolver);
  }
}
