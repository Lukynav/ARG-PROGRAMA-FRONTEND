import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './components/app/app.component'
import { ButtonPrimaryComponent } from './components/buttons/button-primary/button-primary.component'
import { ButtonSecundaryComponent } from './components/buttons/button-secundary/button-secundary.component'
import { CardComponent } from './components/card/card.component'
import { HeaderComponent } from './components/header/header.component'
import { SkillsAndServicesComponent } from './components/skills-and-services/skills-and-services.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        SkillsAndServicesComponent,
        ButtonPrimaryComponent,
        ButtonSecundaryComponent,
        CardComponent
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
