import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponentService } from '../dynamic-component.service';
import { BaseComponent } from '../component-base/component-base.component';

@Component({
  selector: 'app-picture-box',
  templateUrl: './picture-box.component.html',
  styleUrls: ['./picture-box.component.css']
})
export class PictureBoxComponent extends BaseComponent {
  alt;
  url;
  constructor(
    dynamicComponentService: DynamicComponentService,
    componentFactoryResolver: ComponentFactoryResolver) {
    super(dynamicComponentService, componentFactoryResolver);
  }
}
