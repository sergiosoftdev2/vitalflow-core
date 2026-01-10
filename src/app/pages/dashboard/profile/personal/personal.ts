import { Component, inject, computed, signal, effect } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SessionService } from "../../../../../core/services/session.service";
import { UserService } from "../../../../services/user.service";
import { ToastService } from "../../../../../core/services/toast.service";
import { PageContainerComponent } from "../../../../ui/container/container";
import { CardComponent } from "../../../../ui/card/card";
import { AvatarComponent } from "../../../../ui/avatar/avatar";
import { InputTextComponent } from "../../../../ui/input-text/input-text";
import { ButtonComponent } from "../../../../ui/button/button";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faSave, faChevronLeft, faCamera, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from "@angular/router";
import { TitleComponent } from "../../../../ui/title/title";

@Component({
  selector: 'app-profile-personal',
  standalone: true,
  imports: [
    CommonModule,
    PageContainerComponent,
    CardComponent,
    InputTextComponent,
    ButtonComponent,
    FontAwesomeModule,
    RouterLink,
    AvatarComponent,
    TitleComponent
],
  templateUrl: './personal.html',
})
export class PersonalComponent {
  private readonly sessionService = inject(SessionService);
  private readonly userService = inject(UserService);
  private readonly toastService = inject(ToastService);

  myProfile = this.sessionService.user;
  
  firstName = signal('');
  lastName = signal('');
  email = signal('');

  faSave = faSave;
  faChevronLeft = faChevronLeft;
  faCamera = faCamera;
  faUserEdit = faUserEdit;

  isGoogleUser = computed(() => !!this.myProfile()?.googleId);

  hasNoChanges = computed(() => {
    const user = this.myProfile();
    if (!user) return true;

    const isSameName = this.firstName() === user.firstName;
    const isSameLastName = this.lastName() === user.lastName;
    
    if (this.isGoogleUser()) {
      return isSameName && isSameLastName;
    }
    
    const isSameEmail = this.email() === user.email;
    return isSameName && isSameLastName && isSameEmail;
  });

  constructor() {
    effect(() => {
      const user = this.myProfile();
      if (user) {
        this.firstName.set(user.firstName);
        this.lastName.set(user.lastName);
        this.email.set(user.email);
      }
    }, { allowSignalWrites: true });
  }

  saveChanges() {
    const user = this.myProfile();
    if (!user) return;

    const updateData: any = {
      firstName: this.firstName(),
      lastName: this.lastName(),
    };

    if (!this.isGoogleUser()) {
      updateData.email = this.email();
    }

    this.userService.updateUser(user._id, updateData).subscribe({
      next: () => {
        this.toastService.success('Tus cambios se han guardado correctamente.', 'Perfil Actualizado');
      },
      error: (err) => {
        console.error('Error al actualizar el perfil', err);
        this.toastService.error('No se pudo actualizar el perfil. Intenta de nuevo.', 'Error');
      }
    });
  }
}
