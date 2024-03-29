import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { ButtonPrimaryComponent } from '../buttons/button-primary/button-primary.component'
import { ButtonSecundaryComponent } from '../buttons/button-secundary/button-secundary.component'
import { CardComponent } from '../card/card.component'
import { HeaderComponent } from '../header/header.component'
import { SkillsAndServicesComponent } from '../skills-and-services/skills-and-services.component'
import { AboutComponent } from '../about/about.component'
import { NavComponent } from '../nav/nav.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        NavComponent,
        HeaderComponent,
        SkillsAndServicesComponent,
        ButtonPrimaryComponent,
        ButtonSecundaryComponent,
        CardComponent,
        AboutComponent
      ]
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
  /*
  it(`should have as title 'portfolio-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('portfolio-frontend')
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'portfolio-frontend app is running!'
    )
  })*/
})
