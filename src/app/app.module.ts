import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GroupContainerComponent } from './group-container/group-container.component';
import { FormComponentOneComponent } from './form-component-one/form-component-one.component';
import { FormComponentTwoComponent } from './form-component-two/form-component-two.component';
import { FormComponentThreeComponent } from './form-component-three/form-component-three.component';
import { FormComponentFourComponent } from './form-component-four/form-component-four.component';
import { FormComponentFiveComponent } from './form-component-five/form-component-five.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GroupContainerComponent,
    FormComponentOneComponent,
    FormComponentTwoComponent,
    FormComponentThreeComponent,
    FormComponentFourComponent,
    FormComponentFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
