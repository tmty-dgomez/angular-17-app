import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-index-users',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUsersComponent {
  collection: User[] | undefined;
  loading: boolean = false;
  title: string = 'Usuarios';

  constructor(private service: UsersService, private router: Router) {
    this.index();
  }

  index() {
    this.collection = undefined;
    this.service.index().subscribe({
      next: (data) => {
        this.collection = data.data;
      },
      error: (err) => {
        console.error('Error al obtener los usuarios:', err);
      }
    });
  }

}
