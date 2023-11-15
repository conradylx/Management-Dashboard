import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContactAppComponent } from './contact-app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
    ContactAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SideNavComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, FlexLayoutModule, ContactRoutingModule],
})
export class ContactModule {}
