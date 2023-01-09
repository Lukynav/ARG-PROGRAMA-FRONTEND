import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonPrimaryComponent } from '../buttons/button-primary/button-primary.component'
import { ButtonSecundaryComponent } from '../buttons/button-secundary/button-secundary.component'

import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        ButtonPrimaryComponent,
        ButtonSecundaryComponent
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
