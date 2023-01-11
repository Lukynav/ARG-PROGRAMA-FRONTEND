import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-button-secundary',
  templateUrl: './button-secundary.component.html'
})
export class ButtonSecundaryComponent {
  @Input() content?: string = 'secundary button'
}
