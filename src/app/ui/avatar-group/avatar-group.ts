import { CommonModule } from "@angular/common";
import { Component, input, computed } from "@angular/core";

@Component({
  selector: 'app-avatar-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar-group.html'
})
export class AvatarGroupComponent {
  max = input<number>(5);
  
  // Clases base para el contenedor del grupo
  containerClasses = 'flex items-center -space-x-4 hover:space-x-2 transition-all duration-500 ease-in-out group pb-2 [&>app-avatar]:transition-all [&>app-avatar]:duration-500 [&>app-avatar]:ease-in-out';
}
