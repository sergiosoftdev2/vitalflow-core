import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button';

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './design-system.html',
})
export class DesignSystemComponent {

}
