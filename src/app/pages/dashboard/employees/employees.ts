import { Component, inject, signal } from "@angular/core";
import { PageContainerComponent } from "../../../ui/container/container";
import { TitleComponent } from "../../../ui/title/title";
import { TableColumn, TableComponent } from "../../../ui/table/table";
import { UserService } from "../../../services/user.service";
import { UserDto } from "../../../core/api/models";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.html',
    standalone: true,
    imports: [PageContainerComponent, TitleComponent, TableComponent]
})
export class EmployeesComponent {
  private readonly userService = inject(UserService);

  myEmployees = signal([]);
  columns = signal<TableColumn[]>([
    { key: 'firstName', label: 'Nombre' },
    { key: 'lastName', label: 'Apellido' },
    { key: 'email', label: 'Email' },
  ]);

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this.myEmployees.set(users as any);
    });
  }

  onRowClick(user: UserDto) {
    this.userService.getUser(user._id).subscribe((user) => {
      console.log(user);
    });
  }    
}
