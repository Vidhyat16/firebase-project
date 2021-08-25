import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AddUpdateLocationComponent } from './add-update-location.component';
import { AddUpdateLocationRoutingModule } from './add-update-routing.module';
import { CreateEditModule } from 'src/app/library/create-edit-location/create-edit-location.module';
/* import { CreateEditModule } from 'asmt-lib-al-nw';
 */
@NgModule({
  imports: [FormsModule, AddUpdateLocationRoutingModule, CreateEditModule],
  declarations: [AddUpdateLocationComponent]
})
export class AddUpdateLocationModule {}
