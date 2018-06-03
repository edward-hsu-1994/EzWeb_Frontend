import { ComponentsModule, components } from './components.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  getComponent(componentName): any {
    return components.filter(x => x.name === componentName)[0];
  }
}
