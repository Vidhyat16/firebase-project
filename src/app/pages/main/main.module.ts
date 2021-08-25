import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { LoginModule } from 'src/app/library/login/login.module';
/* import { LoginModule } from 'asmt-lib-al-nw';
 */
@NgModule({
  imports: [FormsModule, MainRoutingModule, LoginModule],
  declarations: [MainComponent]
})
export class MainModule {}
