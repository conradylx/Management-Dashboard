import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements OnInit {
  user: User | null = null;

  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (!id) id = 1;
      
      this.service.users.subscribe((users: User[]) => {
        if (users.length === 0) return;
        const foundUser = this.service.userById(id);
        this.user = foundUser ? foundUser : null;
      });
    });
  }
}
