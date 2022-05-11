import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomDataVisualModule} from "custom-data-visual";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {ChartModule} from "primeng/chart";
import {FormsModule} from "@angular/forms";
import {FlipModule} from "ngx-flip";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        CustomDataVisualModule,
        AppRoutingModule,
        MatDialogModule,
        ChartModule,
        FormsModule,
        BrowserAnimationsModule,
        FlipModule
    ],
  providers: [],
  bootstrap: [AppComponent],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
