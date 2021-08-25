import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditLocationComponent } from './create-edit-location.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateEditLocationComponent],
  imports: [CommonModule, FormsModule],
  exports: [CreateEditLocationComponent]
})
export class CreateEditModule {}
