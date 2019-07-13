import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingDemoComponent } from './components/data-binding-demo/data-binding-demo.component';
import {FormsModule} from '@angular/forms';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    DataBindingDemoComponent,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
