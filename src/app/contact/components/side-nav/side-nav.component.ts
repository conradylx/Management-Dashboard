import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  public isScreenSmall: boolean = false;
  users: Observable<User[]> = new Observable<User[]>();
  isDarkTheme: boolean = false;

  constructor(
    private breakPointObserver: BreakpointObserver,
    private userSrv: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breakPointObserver
      .observe(['(max-width: 720px)'])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
    this.users = this.userSrv.users;
    this.userSrv.loadAll();

    this.users.subscribe((data) => {
      data.length > 0 && this.router.navigate(['/contact', data[0].id]);
    });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
