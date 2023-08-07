import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './screen/_root/app.component';
import {HomePageComponent} from './screen/home-page/home-page.component';
import {FooterComponent} from './component/footer/footer.component';
import {NgIconsModule} from "@ng-icons/core";
import {bootstrapLinkedin} from '@ng-icons/bootstrap-icons'
import {bootstrapGithub} from '@ng-icons/bootstrap-icons'
import {bootstrapInstagram} from '@ng-icons/bootstrap-icons'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({bootstrapLinkedin, bootstrapGithub, bootstrapInstagram}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
