import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ButtonPrimaryComponent } from './buttons/button-primary/button-primary.component'
import { ButtonSecundaryComponent } from './buttons/button-secundary/button-secundary.component'
import { SkillsAndServicesComponent } from './skills-and-services/skills-and-services.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonPrimaryComponent,
    ButtonSecundaryComponent,
    SkillsAndServicesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
