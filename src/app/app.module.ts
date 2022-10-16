import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultipleDraggableModalsModule } from 'multiple-draggable-modals';
import { ModalContainerComponent } from './components/app-root/modal-container/modal-container.component';
import { AppRootComponent } from './components/app-root/app-root.component';
import { PanelComponent } from './components/app-root/modal-container/panel/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalContainerComponent,
    AppRootComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    MultipleDraggableModalsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
