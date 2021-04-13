import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ SharedModule } from '../shared/shared.module';
import { MaterialModuleRoutingModule } from './material-module-routing.module';
import { MaterialexampleListComponent } from './materialexample-list/materialexample-list.component';
import { MaterialExampleComponent } from './material-example/material-example.component';


@NgModule({
  declarations: [MaterialexampleListComponent, MaterialExampleComponent],
  imports: [
    CommonModule,
    MaterialModuleRoutingModule,
    SharedModule
  ]
})
export class MaterialModuleModule { }
