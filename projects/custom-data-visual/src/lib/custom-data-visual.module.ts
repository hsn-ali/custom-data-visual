import {NgModule} from '@angular/core';
import {CustomDataVisualComponent} from './custom-data-visual.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {ToolbarDataVisualModalComponent} from './toolbar-data-visual-modal/toolbar-data-visual-modal.component';
import {CommonModule} from "@angular/common";
import {ChartModule} from "primeng/chart";
import {FlipModule} from "ngx-flip";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    CustomDataVisualComponent,
    ToolbarDataVisualModalComponent
  ],
  imports: [
    MatTooltipModule,
    CommonModule,
    ChartModule,
    FlipModule,
    MatDialogModule
  ],
  entryComponents: [ToolbarDataVisualModalComponent],
  exports: [
    CustomDataVisualComponent
  ]
})
export class CustomDataVisualModule {
}
