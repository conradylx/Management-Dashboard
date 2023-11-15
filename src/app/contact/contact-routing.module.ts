import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ContactAppComponent } from './contact-app.component';

const routes: Routes = [
  {
    path: '',
    component: ContactAppComponent,
    children: [{ path: '', component: MainContentComponent }],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
