import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContactAppComponent } from './contact-app.component';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { ContactRoutingModule } from './contact-routing.module';
import { UserService } from './services/user.service';
import { NotesComponent } from './components/notes/notes.component';

@NgModule({
  declarations: [
    ContactAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SideNavComponent,
    NotesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ContactRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService],
})
export class ContactModule {}
