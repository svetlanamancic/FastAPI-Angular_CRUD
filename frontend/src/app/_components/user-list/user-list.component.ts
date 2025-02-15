import { Component } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.addUser().subscribe({
      next: (res) => {console.log(res)},
      error: (err) => {console.log(err)}
    });
  }
}
