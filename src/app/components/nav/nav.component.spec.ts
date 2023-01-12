import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonPrimaryComponent } from '../buttons/button-primary/button-primary.component'
import { ButtonSecundaryComponent } from '../buttons/button-secundary/button-secundary.component'

import { NavComponent } from './nav.component'

describe('NavComponent', () => {
  let component: NavComponent
  let fixture: ComponentFixture<NavComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavComponent,
        ButtonPrimaryComponent,
        ButtonSecundaryComponent
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(NavComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
