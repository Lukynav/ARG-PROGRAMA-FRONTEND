import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CardComponent } from '../card/card.component'

import { SkillsAndServicesComponent } from './skills-and-services.component'

describe('SkillsAndServicesComponent', () => {
  let component: SkillsAndServicesComponent
  let fixture: ComponentFixture<SkillsAndServicesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsAndServicesComponent, CardComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(SkillsAndServicesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
