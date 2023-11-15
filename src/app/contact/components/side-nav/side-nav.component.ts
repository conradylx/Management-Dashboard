import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent implements OnInit {
  public isScreenSmall: boolean = false;
  constructor(private breakPointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakPointObserver
      .observe(['(max-width: 720px)'])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
  }
}
