import { Component, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { 
  INPUT_SEARCH_CLASSES, 
  INPUT_SEARCH_CONTAINER_CLASSES, 
  INPUT_SEARCH_ICON_CLASSES 
} from './input-search.constants';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './input-search.html'
})
export class InputSearchComponent {
  placeholder = input<string>('Search...');
  value = model<string>('');

  // Clases
  containerClasses = INPUT_SEARCH_CONTAINER_CLASSES;
  iconClasses = INPUT_SEARCH_ICON_CLASSES;
  inputClasses = INPUT_SEARCH_CLASSES;

  // Iconos
  faSearch = faSearch;

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }
}
