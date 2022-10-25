import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { PanelsContainerComponent } from './components/panels-container/panels-container.component';
import { PanelComponent } from './components/panels-container/panel/panel.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PanelFrameComponent } from './components/panels-container/panel/panel-frame/panel-frame.component';
import { ExternalFrameComponent } from './components/panels-container/panel/panel-frame/external-frame/external-frame.component';
import { PortalModule } from '@angular/cdk/portal';
import { PanelsService } from './components/panels-container/service/panels.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    PanelsContainerComponent,
    PanelComponent,
    PanelFrameComponent,
    ExternalFrameComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    DragDropModule,
    MatCardModule,
    MatIconModule,
    PortalModule,
    MatSlideToggleModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    PanelsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
