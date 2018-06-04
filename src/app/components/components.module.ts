import { HyperLinkComponent } from './hyper-link/hyper-link.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { DynamicComponentService } from './dynamic-component.service';
import { DynamicComponentDirective } from './dynamic-component.directive';
import { PictureBoxComponent } from './picture-box/picture-box.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { MatGridListModule } from '@angular/material';
import { NgxDnDModule } from '@swimlane/ngx-dnd';

export let components = [
  //#region Layouts
  BlankLayoutComponent,
  GridLayoutComponent,
  //#endregion
  //#region Components
  HyperLinkComponent,
  PictureBoxComponent
  //#endregion
];

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    NgxDnDModule
  ],
  declarations: [DynamicComponentDirective, components],
  exports: [BlankLayoutComponent],
  providers: [DynamicComponentService],
  entryComponents: components
})
export class ComponentsModule { }
