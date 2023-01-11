import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './components/app/app.component'
import { HeaderComponent } from './components/header/header.component'
import { ButtonPrimaryComponent } from './components/buttons/button-primary/button-primary.component'
import { ButtonSecundaryComponent } from './components/buttons/button-secundary/button-secundary.component'
import { SkillsAndServicesComponent } from './components/skills-and-services/skills-and-services.component'
import { CardComponent } from './components/card/card.component'
import { NavComponent } from './components/nav/nav/nav.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonPrimaryComponent,
    ButtonSecundaryComponent,
    SkillsAndServicesComponent,
    CardComponent,
    NavComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
